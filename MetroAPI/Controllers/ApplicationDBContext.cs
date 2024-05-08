using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MetroAPI.Controllers
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<UserInfo> users {get; set;}
        public DbSet<Travel> travels {get; set;}
        public DbSet<Ticket> tickets {get; set;}
    }
}