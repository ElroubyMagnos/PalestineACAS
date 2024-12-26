using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACASModern.Server.Migrations
{
    /// <inheritdoc />
    public partial class lists : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContentOf_ListOf_ParentListID",
                table: "ContentOf");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ListOf",
                table: "ListOf");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ContentOf",
                table: "ContentOf");

            migrationBuilder.RenameTable(
                name: "ListOf",
                newName: "ListsOf");

            migrationBuilder.RenameTable(
                name: "ContentOf",
                newName: "ContentsOfList");

            migrationBuilder.RenameIndex(
                name: "IX_ContentOf_ParentListID",
                table: "ContentsOfList",
                newName: "IX_ContentsOfList_ParentListID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ListsOf",
                table: "ListsOf",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ContentsOfList",
                table: "ContentsOfList",
                column: "ID");

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Major = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    GPA = table.Column<double>(type: "float", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EnrollmentDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Teachers",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Department = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subjects = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HireDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OfficeLocation = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teachers", x => x.ID);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_ContentsOfList_ListsOf_ParentListID",
                table: "ContentsOfList",
                column: "ParentListID",
                principalTable: "ListsOf",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContentsOfList_ListsOf_ParentListID",
                table: "ContentsOfList");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Teachers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ListsOf",
                table: "ListsOf");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ContentsOfList",
                table: "ContentsOfList");

            migrationBuilder.RenameTable(
                name: "ListsOf",
                newName: "ListOf");

            migrationBuilder.RenameTable(
                name: "ContentsOfList",
                newName: "ContentOf");

            migrationBuilder.RenameIndex(
                name: "IX_ContentsOfList_ParentListID",
                table: "ContentOf",
                newName: "IX_ContentOf_ParentListID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ListOf",
                table: "ListOf",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ContentOf",
                table: "ContentOf",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ContentOf_ListOf_ParentListID",
                table: "ContentOf",
                column: "ParentListID",
                principalTable: "ListOf",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
