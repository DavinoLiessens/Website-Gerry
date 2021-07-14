using DAL.DB_Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public interface IBirdRepository
    {
        Task<Bird> GetBird(int id);
        Task<List<Bird>> GetAllBirds();
        Task<Bird> CreateBird(Bird bird);
        Task<Bird> DeleteBird(int id);
        Task<Bird> ChangeBird(Bird bird);
    }

    public class BirdRepository : IBirdRepository
    {
        private readonly AppDbContext _context;

        public BirdRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Bird> ChangeBird(Bird bird)
        {
            Bird newBird = await _context.Birds.FindAsync(bird.ID);
            _context.Birds.Update(newBird);
            await _context.SaveChangesAsync();
            return newBird;
        }

        public async Task<Bird> CreateBird(Bird bird)
        {
            Bird newBird = _context.Birds.Add(bird).Entity;
            await _context.SaveChangesAsync();
            return newBird;
        }

        public async Task<Bird> DeleteBird(int id)
        {
            Bird bird = await _context.Birds.FindAsync(id);
            _context.Birds.Remove(bird);
            await _context.SaveChangesAsync();
            return bird;
        }

        public async Task<List<Bird>> GetAllBirds()
        {
            return await _context.Birds.Include(x => x.Eigenaar).ToListAsync();
        }

        public async Task<Bird> GetBird(int id)
        {
            return await _context.Birds.Include(x => x.Eigenaar).SingleOrDefaultAsync(x => x.ID == id);
        }
    }
}
