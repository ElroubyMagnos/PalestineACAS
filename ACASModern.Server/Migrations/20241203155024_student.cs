using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACASModern.Server.Migrations
{
    /// <inheritdoc />
    public partial class student : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Year",
                table: "Students",
                newName: "YearTaken");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Students",
                newName: "WhatsNumber");

            migrationBuilder.RenameColumn(
                name: "EnrollmentDate",
                table: "Students",
                newName: "BirthDate");

            migrationBuilder.AddColumn<string>(
                name: "BirthPlace",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<byte[]>(
                name: "BornPicture",
                table: "Students",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<bool>(
                name: "Boy",
                table: "Students",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<byte[]>(
                name: "Certificate",
                table: "Students",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<string>(
                name: "DadDeath",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DadName",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DadNameEnglish",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Disability",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DisabilityType",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Earned",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FamilyName",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FamilyNameEnglish",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstNameEnglish",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GrandName",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GrandNameEnglish",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<byte[]>(
                name: "IdentityPicture",
                table: "Students",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<string>(
                name: "Merry",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "MustPay",
                table: "Students",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "NzohPlace",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Paid",
                table: "Students",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "Religion",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SecondaryMark",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<byte[]>(
                name: "SelfPicture",
                table: "Students",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "StateNumber",
                table: "Students",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "Students",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StudyYear",
                table: "Students",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Takhsos",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TypeOfSecondary",
                table: "Students",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthPlace",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "BornPicture",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Boy",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Certificate",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "DadDeath",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "DadName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "DadNameEnglish",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Disability",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "DisabilityType",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Earned",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "FamilyName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "FamilyNameEnglish",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "FirstNameEnglish",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "GrandName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "GrandNameEnglish",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "IdentityPicture",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Merry",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "MustPay",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "NzohPlace",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Paid",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Religion",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "SecondaryMark",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "SelfPicture",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "State",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "StateNumber",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "StudyYear",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Takhsos",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "TypeOfSecondary",
                table: "Students");

            migrationBuilder.RenameColumn(
                name: "YearTaken",
                table: "Students",
                newName: "Year");

            migrationBuilder.RenameColumn(
                name: "WhatsNumber",
                table: "Students",
                newName: "FullName");

            migrationBuilder.RenameColumn(
                name: "BirthDate",
                table: "Students",
                newName: "EnrollmentDate");
        }
    }
}
