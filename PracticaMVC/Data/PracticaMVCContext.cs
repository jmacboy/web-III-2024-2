using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PracticaMVC.Models;

namespace PracticaMVC.Data
{
    public class PracticaMVCContext : DbContext
    {
        public PracticaMVCContext (DbContextOptions<PracticaMVCContext> options)
            : base(options)
        {
        }

        public DbSet<PracticaMVC.Models.Persona> Persona { get; set; } = default!;
        public DbSet<PracticaMVC.Models.Mascota> Mascota { get; set; } = default!;
    }
}
