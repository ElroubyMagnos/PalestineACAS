using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACASModern.Server.Migrations
{
    /// <inheritdoc />
    public partial class subjects : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Subjects",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Semester = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Specialization = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubjectName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubjectNameEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumberOfCreditHours = table.Column<int>(type: "int", nullable: false),
                    Theoreticalhours = table.Column<int>(type: "int", nullable: false),
                    Practicalhours = table.Column<int>(type: "int", nullable: false),
                    Prerequisite = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subjects", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Subjects");
        }
    }
}
