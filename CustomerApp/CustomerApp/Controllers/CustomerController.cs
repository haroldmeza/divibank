using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Models.Repository;
using CustomerApp.Models.Tablets;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CustomerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        /*private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };*/

        private readonly ILogger<CustomerController> _logger;
        private ICustomerRepository _customerRepository;

        public CustomerController(ILogger<CustomerController> logger, ICustomerRepository customerRepository)
        {
            _logger = logger;
            _customerRepository = customerRepository;
        }

        /*[HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }*/

        [HttpGet]
        public ActionResult<IEnumerable<Customer>> GetCustomers()
        {
            /*var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();*/
            return Ok(_customerRepository.GetCustomers());
        }

        [HttpPost]
        public ActionResult<Customer> AddCustomer([FromBody] Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if(_customerRepository.FindCustomerByEmail(customer.Email) != null)
            {
                return BadRequest("Invalid email, duplicate");
            }
            var newCustomer = _customerRepository.AddCustomer(customer);
            return Ok(newCustomer);
        }

        [HttpPost("updateLoans")]
        public ActionResult<IEnumerable<Loan>> UpdateLoans([FromBody] Customer customer)
        {
            var pochera = "tronitra";
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var updatedCustomer = _customerRepository.ProcessLoans(customer);
            return Ok(updatedCustomer.loans);
        }
    }
}
