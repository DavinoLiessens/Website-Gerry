using DAL.DB_Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public interface IOwnerRepository
    {
        Task<List<Owner>> GetAllOwners();
        Task<Owner> GetOwner(int id);
        Task<Owner> CreateOwner(Owner owner);
        Task<Owner> DeleteOwner(int id);
        Task<Owner> ChangeOwner(Owner owner);
    }

    public class OwnerRepository : IOwnerRepository
    {
        private readonly AppDbContext _context;

        public OwnerRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Owner> ChangeOwner(Owner owner)
        {
            Owner newOwner = await _context.Owners.FindAsync(owner.ID);
            _context.Owners.Update(newOwner);
            await _context.SaveChangesAsync();
            return newOwner;
        }

        public async Task<Owner> CreateOwner(Owner owner)
        {
            Owner newOwner = _context.Owners.Add(owner).Entity;
            await _context.SaveChangesAsync();
            return newOwner;
        }

        public async Task<Owner> DeleteOwner(int id)
        {
            Owner owner = await _context.Owners.FindAsync(id);
            _context.Owners.Remove(owner);
            await _context.SaveChangesAsync();
            return owner;
        }

        public async Task<List<Owner>> GetAllOwners()
        {
            return await _context.Owners.ToListAsync();
        }

        public async Task<Owner> GetOwner(int id)
        {
            return await _context.Owners.FindAsync(id);
        }
    }
}
