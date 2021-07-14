using DAL.DB_Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
            _context.Birds.Update(bird);
            await _context.SaveChangesAsync();
            Bird dbBird = await GetBirdWithOwner().SingleOrDefaultAsync(x => x.ID == bird.ID);
            return dbBird;
        }

        public async Task<Bird> CreateBird(Bird bird)
        {
            _context.Birds.Add(bird);
            await _context.SaveChangesAsync();
            Bird dbBird = await GetBirdWithOwner().SingleOrDefaultAsync(x => x.ID == bird.ID);
            return dbBird;
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
            return await GetBirdWithOwner().ToListAsync();
        }

        public async Task<Bird> GetBird(int id)
        {
            return await GetBirdWithOwner().SingleOrDefaultAsync(x => x.ID == id);
        }

        private IQueryable<Bird> GetBirdWithOwner()
        {
            return _context.Birds.Include(x => x.Eigenaar);
        } 
    }
}
