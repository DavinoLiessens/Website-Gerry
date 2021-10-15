using DAL.DB_Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public interface ICoupleRepository
    {
        Task<Couple> GetCouple(int id);
        Task<List<Couple>> GetAllCouples();
        Task<Couple> CreateCouple(Couple couple);
        Task<Couple> DeleteCouple(int id);
        Task<Couple> ChangeCouple(Couple couple);
    }
    public class CoupleRepository : ICoupleRepository
    {
        private readonly AppDbContext _context;
        public CoupleRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Couple> CreateCouple(Couple couple)
        {
            _context.Couples.Add(couple);
            await _context.SaveChangesAsync();
            Couple dbCouple = await _context.Couples.SingleOrDefaultAsync(x => x.ID == couple.ID);
            return dbCouple;
        }

        public async Task<Couple> DeleteCouple(int id)
        {
            Couple couple = await _context.Couples.FindAsync(id);
            _context.Couples.Remove(couple);
            await _context.SaveChangesAsync();
            return couple;
        }

        public async Task<List<Couple>> GetAllCouples()
        {
            return await _context.Couples.ToListAsync();
        }

        public async Task<Couple> GetCouple(int id)
        {
            return await _context.Couples.SingleOrDefaultAsync(x => x.ID == id);
        }

        public async Task<Couple> ChangeCouple(Couple couple)
        {
            _context.Couples.Update(couple);
            await _context.SaveChangesAsync();
            Couple dbCouple = await _context.Couples.SingleOrDefaultAsync(x => x.ID == couple.ID);
            return dbCouple;
        }
    }
}
