using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACASModern.Server.Migrations
{
    /// <inheritdoc />
    public partial class dadform : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NewStudentsRequestsDAD",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DadSocialState = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DadPhone = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    DadJob = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DadName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    StudentRequestID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewStudentsRequestsDAD", x => x.ID);
                    table.ForeignKey(
                        name: "FK_NewStudentsRequestsDAD_NewStudentsRequests_StudentRequestID",
                        column: x => x.StudentRequestID,
                        principalTable: "NewStudentsRequests",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NewStudentsRequestsDAD_StudentRequestID",
                table: "NewStudentsRequestsDAD",
                column: "StudentRequestID",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NewStudentsRequestsDAD");
        }
    }
}
