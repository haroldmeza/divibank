using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models.Tablets
{
    public class Loan
    {
        public long Id { get; set; }

        public DateTime CreationDate { get; set; } = DateTime.Now;

        [Column(TypeName = "decimal(18, 2)")]
        public Decimal Amount { get; set; }

    }
}
