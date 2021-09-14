using CustomerApp.Models.DBContext;
using CustomerApp.Models.Tablets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CustomerApp.Exceptions;
using CustomerApp.Utils;

namespace CustomerApp.Models.Repository
{
    public class EFCustomerrRepository : ICustomerRepository
    {
        private DivibankDbContext context;
        public EFCustomerrRepository(DivibankDbContext ctx)
        {
            context = ctx;
        }

        public Customer AddCustomer(Customer customer)
        {
            context.Customer.Add(customer);
            saveChanges();
            return customer;
        }

        
        public Customer FindCustomerByEmail(string email) => context.Customer.FirstOrDefault(c => c.Email == email);
        
        public IQueryable<Customer> GetCustomers() => context.Customer.Include(c => c.loans);

        public Customer ProcessLoans(Customer customer)
        {
            
            Customer currentCustomer = context.Customer.Include(c=> c.loans).FirstOrDefault(c => c.Id == customer.Id);
            if(currentCustomer == null)
            {
                throw new RecordNotFoundException("Customer doesn't exists");
            }

            DeleteLoans(currentCustomer.loans, customer.loans);
            AddLoans(currentCustomer, customer.loans.Where(l => l.Id == 0).ToList());
            UpdateLoans(customer.loans.Where(l => l.Id != 0).ToList());
            saveChanges();
            return context.Customer.Include(c=> c.loans).FirstOrDefault(c => c.Id == customer.Id);
        }

        public void AddLoans(Customer customer, List<Loan> loans)
        {
            loans.ForEach(l =>
            {
                customer.loans.Add(new Loan()
                {
                    Amount = l.Amount
                });
            });
        }

        public void DeleteLoans(List<Loan> customerLoans, List<Loan> updatedCustomerLoans)
        {
            var loansTodelete = customerLoans.Except(updatedCustomerLoans, new LoanComparerById());
            context.Loan.RemoveRange(loansTodelete);
        }

        public void UpdateLoans(List<Loan> loans)
        {
            loans.ForEach(l =>
            {
                var loanToUpdate = context.Loan.Where(cl => cl.Id == l.Id).First();
                loanToUpdate.Amount = l.Amount;
            });
        }

        private void saveChanges()
        {
            context.SaveChanges();
        }
    }
}
