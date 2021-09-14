using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomerApp.Migrations
{
    public partial class UpdateTablesLoanAndCustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.AddColumn<decimal>(
                name: "Amount",
                table: "Loan",
                type: "decimal(18, 2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "Loan",
                type: "datetime",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Loan");

            migrationBuilder.DropColumn(
                name: "CreacionDate",
                table: "Loan");

        }
    }
}
