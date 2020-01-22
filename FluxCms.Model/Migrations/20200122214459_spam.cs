using Microsoft.EntityFrameworkCore.Migrations;

namespace FluxCms.Model.Migrations
{
    public partial class spam : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "IsMarkedAsSpam",
                table: "Comments",
                nullable: false,
                oldClrType: typeof(byte),
                oldType: "tinyint");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte>(
                name: "IsMarkedAsSpam",
                table: "Comments",
                type: "tinyint",
                nullable: false,
                oldClrType: typeof(bool));
        }
    }
}
