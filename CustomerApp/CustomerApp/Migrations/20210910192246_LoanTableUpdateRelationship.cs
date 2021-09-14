using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomerApp.Migrations
{
    public partial class LoanTableUpdateRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Loan_Customer_CustomerId1",
                table: "Loan");

            migrationBuilder.DropIndex(
                name: "IX_Loan_CustomerId1",
                table: "Loan");

            migrationBuilder.DropColumn(
                name: "CustomerId1",
                table: "Loan");

            migrationBuilder.AlterColumn<long>(
                name: "CustomerId",
                table: "Loan",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Loan_CustomerId",
                table: "Loan",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Loan_Customer_CustomerId",
                table: "Loan",
                column: "CustomerId",
                principalTable: "Customer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Loan_Customer_CustomerId",
                table: "Loan");

            migrationBuilder.DropIndex(
                name: "IX_Loan_CustomerId",
                table: "Loan");

            migrationBuilder.AlterColumn<int>(
                name: "CustomerId",
                table: "Loan",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CustomerId1",
                table: "Loan",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Loan_CustomerId1",
                table: "Loan",
                column: "CustomerId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Loan_Customer_CustomerId1",
                table: "Loan",
                column: "CustomerId1",
                principalTable: "Customer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
