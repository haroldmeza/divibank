using CustomerApp.Models.Tablets;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Utils
{
    public class LoanComparerById : IEqualityComparer<Loan>
    {
        public bool Equals([AllowNull] Loan x, [AllowNull] Loan y)
        {
            return x.Id == y.Id;
        }

        public int GetHashCode([DisallowNull] Loan obj)
        {
            return obj.Id.GetHashCode();
        }
    }
}
