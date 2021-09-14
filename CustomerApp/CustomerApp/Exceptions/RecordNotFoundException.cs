using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Exceptions
{
    public class RecordNotFoundException: Exception
    {
        public RecordNotFoundException(string message): base(message) { }
    }
}
