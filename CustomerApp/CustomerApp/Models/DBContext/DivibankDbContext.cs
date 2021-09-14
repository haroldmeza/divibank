using CustomerApp.Models.Tablets;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models.DBContext
{
    public class DivibankDbContext: DbContext
    {
        public DivibankDbContext(DbContextOptions<DivibankDbContext> options)
           : base(options) { }

        public DbSet<Customer> Customer { set; get; }
        public DbSet<Loan> Loan { set; get; }

        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
                .HasIndex(c => c.Email)
                .IsUnique(true);
        }*/
    }
}
