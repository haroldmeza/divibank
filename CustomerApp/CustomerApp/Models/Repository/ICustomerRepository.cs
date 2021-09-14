using CustomerApp.Models.Tablets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models.Repository
{
    public interface ICustomerRepository
    {
        Customer AddCustomer(Customer customer);
        Customer FindCustomerByEmail(string email);
        IQueryable<Customer> GetCustomers();
        Customer ProcessLoans(Customer customer);
        void DeleteLoans(List<Loan> customerLoans, List<Loan> updatedCustomerLoans);
        void AddLoans(Customer customer, List<Loan> loans);
        void UpdateLoans(List<Loan> loans);
    }
}
