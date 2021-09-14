using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models.Tablets
{
    public class Customer
    {
        public long Id { get; set; }
        [Required]
        public String Name { get; set; }
        [Required]
        public String Email { get; set; }
        [Required]
        public String IdNumber { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        public String Sex { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public DateTime UpdatingDate { get; set; }

        public List<Loan> loans { get; set; } = new List<Loan>();
    }
}
