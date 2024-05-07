using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace MedicineAPI.Controllers
{
    public class ApplicationDBContext : DbContext
    {
       

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<UserInfo> users {get; set;}
        public DbSet<Order> orders {get; set;}
        public DbSet<Medicine> medicines {get; set;}
    }
}