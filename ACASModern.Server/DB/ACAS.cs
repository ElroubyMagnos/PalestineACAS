using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ACASModern.Server.Models;
using ACASModern.Server.Models.Lists;
using ACASModern.Server.Models.Login;
using ACASModern.Server.Models.Students;
using ACASModern.Server.Models.Subjects;
using Microsoft.EntityFrameworkCore;

namespace ACASModern.Server.DB
{
    public class ACAS: DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder ob)
        {
            base.OnConfiguring(ob);
            
            //ob.UseSqlServer("Data Source=SQL8011.site4now.net;Initial Catalog=db_aafbd7_magnosofnapil;User Id=db_aafbd7_magnosofnapil_admin;Password=Abedalla0182163958");
            ob.UseSqlServer("Data Source=.;Initial Catalog=ACAS;Integrated Security=True;TrustServerCertificate=True;");
        }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            base.OnModelCreating(mb);
        
            mb.Entity<Permission>()
            .HasOne(x => x.EmployeeClass)
            .WithOne(x => x.PermissionClass)
            .HasForeignKey<Employee>(x => x.PermissionID);

            mb.Entity<ListOf>()
            .HasMany(x => x.Contents)
            .WithOne(x => x.ParentList)
            .HasForeignKey(x => x.ParentListID);

            mb.Entity<StudentRequest>()
            .HasOne(x => x.StudentDadClass)
            .WithOne(x => x.StudentClass)
            .HasForeignKey<StudentDadRequest>(x => x.StudentRequestID);
        }

        public DbSet<StudentRequest> NewStudentsRequests {get;set;}
        public DbSet<StudentDadRequest> NewStudentsRequestsDAD {get;set;}
        public DbSet<Employee> Employees {get;set;}
        public DbSet<Student> Students {get;set;}
        public DbSet<Teacher> Teachers {get;set;}
        public DbSet<Permission> Permissions {get;set;}
        public DbSet<ListOf> ListsOf {get;set;}
        public DbSet<ContentOf> ContentsOfList {get;set;}
        public DbSet<SubjectsOf> Subjects {get;set;}
    }
}