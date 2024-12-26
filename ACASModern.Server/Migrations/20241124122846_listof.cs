using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACASModern.Server.Migrations
{
    /// <inheritdoc />
    public partial class listof : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ListOf",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameOf = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListOf", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ContentOf",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentListID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentOf", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ContentOf_ListOf_ParentListID",
                        column: x => x.ParentListID,
                        principalTable: "ListOf",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContentOf_ParentListID",
                table: "ContentOf",
                column: "ParentListID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContentOf");

            migrationBuilder.DropTable(
                name: "ListOf");
        }
    }
}
