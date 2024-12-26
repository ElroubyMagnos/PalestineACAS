﻿// <auto-generated />
using System;
using ACASModern.Server.DB;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ACASModern.Server.Migrations
{
    [DbContext(typeof(ACAS))]
    [Migration("20241130111954_subjects")]
    partial class subjects
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ACASModern.Server.Models.Employee", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PermissionID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PermissionID")
                        .IsUnique();

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Lists.ContentOf", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ParentListID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ParentListID");

                    b.ToTable("ContentsOfList");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Lists.ListOf", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("NameOf")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("ListsOf");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Login.Student", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EnrollmentDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("GPA")
                        .HasColumnType("float");

                    b.Property<string>("Major")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Login.Teacher", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("HireDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("OfficeLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.PrimitiveCollection<string>("Subjects")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Permission", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<bool>("CanAcceptStudents")
                        .HasColumnType("bit");

                    b.HasKey("ID");

                    b.ToTable("Permissions");
                });

            modelBuilder.Entity("ACASModern.Server.Models.StudentDadRequest", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("DadJob")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("DadName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("DadPhone")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("DadSocialState")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("StudentRequestID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("StudentRequestID")
                        .IsUnique();

                    b.ToTable("NewStudentsRequestsDAD");
                });

            modelBuilder.Entity("ACASModern.Server.Models.StudentRequest", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("BirthPlace")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("BornPicture")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<bool>("Boy")
                        .HasColumnType("bit");

                    b.Property<byte[]>("Certificate")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("DadDeath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DadName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DadNameEnglish")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Disability")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DisabilityType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Earned")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FamilyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FamilyNameEnglish")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstNameEnglish")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GrandName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GrandNameEnglish")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("IdentityPicture")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Merry")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NzohPlace")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Religion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SecondaryMark")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("SelfPicture")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StateNumber")
                        .HasColumnType("int");

                    b.Property<string>("Takhsos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TypeOfSecondary")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WhatsNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("YearTaken")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("NewStudentsRequests");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Subjects.SubjectsOf", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("CourseNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberOfCreditHours")
                        .HasColumnType("int");

                    b.Property<int>("Practicalhours")
                        .HasColumnType("int");

                    b.Property<string>("Prerequisite")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Semester")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Specialization")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SubjectName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SubjectNameEnglish")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Theoreticalhours")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Employee", b =>
                {
                    b.HasOne("ACASModern.Server.Models.Permission", "PermissionClass")
                        .WithOne("EmployeeClass")
                        .HasForeignKey("ACASModern.Server.Models.Employee", "PermissionID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PermissionClass");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Lists.ContentOf", b =>
                {
                    b.HasOne("ACASModern.Server.Models.Lists.ListOf", "ParentList")
                        .WithMany("Contents")
                        .HasForeignKey("ParentListID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ParentList");
                });

            modelBuilder.Entity("ACASModern.Server.Models.StudentDadRequest", b =>
                {
                    b.HasOne("ACASModern.Server.Models.StudentRequest", "StudentClass")
                        .WithOne("StudentDadClass")
                        .HasForeignKey("ACASModern.Server.Models.StudentDadRequest", "StudentRequestID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("StudentClass");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Lists.ListOf", b =>
                {
                    b.Navigation("Contents");
                });

            modelBuilder.Entity("ACASModern.Server.Models.Permission", b =>
                {
                    b.Navigation("EmployeeClass")
                        .IsRequired();
                });

            modelBuilder.Entity("ACASModern.Server.Models.StudentRequest", b =>
                {
                    b.Navigation("StudentDadClass")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
