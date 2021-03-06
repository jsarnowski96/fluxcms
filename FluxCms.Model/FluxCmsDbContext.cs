﻿using System;
using FluxCms.Model.Models;
using FluxCms.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FluxCms.Model
{
    public partial class FluxCmsContext : DbContext
    {
        public FluxCmsContext()
        {
        }

        public FluxCmsContext(DbContextOptions<FluxCmsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Comments> Comments { get; set; }
        public virtual DbSet<Pages> Pages { get; set; }
        public virtual DbSet<Posts> Posts { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer("Server = localhost; Database = FluxCms; Trusted_Connection = True; ");
                optionsBuilder.UseSqlServer("Server=tcp:darreur.database.windows.net,1433;Initial Catalog=FluxCms;Persist Security Info=False;User ID=fluxcms;Password=zaq1@WSX;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
