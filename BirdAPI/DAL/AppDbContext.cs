using DAL.DB_Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Bird> Birds { get; set; }
        public DbSet<Owner> Owners { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Bird>()
                // 1 Bird has 1 owner
                .HasOne(x => x.Eigenaar)
                // 1 Owner has many birds
                .WithMany(x => x.Vogels)
                .HasForeignKey(x => x.EigenaarID)
                .IsRequired(true)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
