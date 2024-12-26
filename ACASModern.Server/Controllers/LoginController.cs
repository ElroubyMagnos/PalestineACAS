using ACASModern.Server.Connectors;
using ACASModern.Server.DB;
using ACASModern.Server.Models;
using EmployeeModern.Server;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace ACASModern.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }

        [HttpPost("GetTeacherToken")]
        public async Task<string> GetTeacherToken([FromBody] UsernameAndPassword Request)
        {
            var acas = new ACAS();

            var TeacherExist = await acas.Teachers
            .Select(x => new {x.Email, x.Password})
            .FirstOrDefaultAsync(x => x.Email == Request.Username && x.Password == Request.Password);

            if (TeacherExist != null)
            {
                var Untoken = $"{Request.Username}|{Request.Password}|{0}|{DateTime.Now}";

                return Encryption.Encrypt(Untoken);
            }

            return null;
        }

        [HttpPost("GetStudentToken")]
        public async Task<string> GetStudentToken([FromBody] UsernameAndPassword Request)
        {
            var acas = new ACAS();

            var StudentExist = await acas.Students
            .Select(x => new {x.Email, x.Password})
            .FirstOrDefaultAsync(x => x.Email == Request.Username && x.Password == Request.Password);

            if (StudentExist != null)
            {
                var Untoken = $"{Request.Username}|{Request.Password}|{1}|{DateTime.Now}";

                return Encryption.Encrypt(Untoken);
            }

            return null;
        }

        [HttpPost("GetEmployeeToken")]
        public async Task<string> GetEmployeeToken([FromBody] UsernameAndPassword Request)
        {
            var acas = new ACAS();

            var EmployeeExist = await acas.Employees
            .Select(x => new {x.Name, x.Password})
            .FirstOrDefaultAsync(x => x.Name == Request.Username && x.Password == Request.Password);

            if (EmployeeExist != null)
            {
                var Untoken = $"{Request.Username}|{Request.Password}|{2}|{DateTime.Now}";
                
                return Encryption.Encrypt(Untoken);
            }

            return null;
        }
    }
}
