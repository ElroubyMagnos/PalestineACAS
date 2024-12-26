using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACASModern.Server.Migrations
{
    /// <inheritdoc />
    public partial class finalfirstform : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Identity",
                table: "NewStudentsRequests",
                newName: "Religion");

            migrationBuilder.AlterColumn<int>(
                name: "YearTaken",
                table: "NewStudentsRequests",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<byte[]>(
                name: "BornPicture",
                table: "NewStudentsRequests",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<string>(
                name: "DadDeath",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DadNameEnglish",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Disability",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DisabilityType",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Earned",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FamilyNameEnglish",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstNameEnglish",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GrandNameEnglish",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<byte[]>(
                name: "SelfPicture",
                table: "NewStudentsRequests",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<int>(
                name: "StateNumber",
                table: "NewStudentsRequests",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BornPicture",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "DadDeath",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "DadNameEnglish",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "Disability",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "DisabilityType",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "Earned",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "FamilyNameEnglish",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "FirstNameEnglish",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "GrandNameEnglish",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "SelfPicture",
                table: "NewStudentsRequests");

            migrationBuilder.DropColumn(
                name: "StateNumber",
                table: "NewStudentsRequests");

            migrationBuilder.RenameColumn(
                name: "Religion",
                table: "NewStudentsRequests",
                newName: "Identity");

            migrationBuilder.AlterColumn<string>(
                name: "YearTaken",
                table: "NewStudentsRequests",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
