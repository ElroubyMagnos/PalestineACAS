using ACASModern.Server.Connectors;
using ACASModern.Server.DB;
using ACASModern.Server.Models;
using ACASModern.Server.Models.Lists;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace ACASModern.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseController : ControllerBase
    {
        private readonly ILogger<BaseController> _logger;

        public BaseController(ILogger<BaseController> logger)
        {
            _logger = logger;
        }

        [HttpPost("SubmitDadForm")]
        public async Task<bool> SubmitDadForm(StudentDadSignRequest Request)
        {
            var acas = new ACAS();

            await acas.NewStudentsRequestsDAD.AddAsync(new StudentDadRequest()
            {
                StudentRequestID = Request.StudentRequestID,
                DadJob = Request.DadJob,
                DadName = Request.DadName,
                DadPhone = Request.DadPhone,
                DadSocialState = Request.DadSocialState
            });

            await acas.SaveChangesAsync();

            return true;
        }

        [HttpGet("GetListOf/{Name}")]
        public async Task<ContentOf[]> GetListOf(string Name)
        {
            var Gotten = await new ACAS().ListsOf.Include(x => x.Contents).FirstOrDefaultAsync(x => x.NameOf == Name);

            if (Gotten == null)
                return null;

            return Gotten.Contents.ToArray();
        }

        [HttpPost("SendNewStudent")]
        public async Task<int> SendNewStudent(IFormCollection Form)
        {
            var EnteredData = JsonConvert.DeserializeObject<StudentSignRequest>(Form["Data"]);
            var Identity = Form.Files[0];
            var Certificate = Form.Files[1];
            var born = Form.Files[2];
            var self = Form.Files[3];

            var idenmemory = new MemoryStream();
            await Identity.CopyToAsync(idenmemory);
            var certmemory = new MemoryStream();
            await Certificate.CopyToAsync(certmemory);
            var bornmemory = new MemoryStream();
            await born.CopyToAsync(bornmemory);
            var selfmemory = new MemoryStream();
            await self.CopyToAsync(selfmemory);

            var acas = new ACAS();
            await acas.NewStudentsRequests.AddAsync(new StudentRequest()
            {
                SelfPicture = selfmemory.ToArray(),
                BornPicture = bornmemory.ToArray(),
                Address = EnteredData.Address,
                BirthDate = EnteredData.BirthDate,
                BirthPlace = EnteredData.BirthPlace,
                Boy = EnteredData.Sex == "1" || EnteredData.Sex == "True",
                Certificate = certmemory.ToArray(),
                DadName = EnteredData.DadName,
                FamilyName = EnteredData.FamilyName,
                FirstName = EnteredData.FirstName,
                GrandName = EnteredData.GrandName,
                IdentityPicture = idenmemory.ToArray(),
                Merry = EnteredData.Merry,
                NzohPlace = EnteredData.NzohPlace,
                PhoneNumber = EnteredData.PhoneNumber,
                SecondaryMark = EnteredData.SecondaryMark,
                State = EnteredData.State,
                Takhsos = EnteredData.Takhsos,
                TypeOfSecondary = EnteredData.TypeOfSecondary,
                WhatsNumber = EnteredData.WhatsNumber,
                YearTaken = EnteredData.YearTaken,
                DadDeath = EnteredData.DadDeath,
                DadNameEnglish = EnteredData.DadNameEnglish,
                Disability = EnteredData.Disability,
                DisabilityType = EnteredData.DisabilityType,
                Earned = EnteredData.Earned,
                FamilyNameEnglish = EnteredData.FamilyNameEnglish,
                FirstNameEnglish = EnteredData.FirstNameEnglish,
                GrandNameEnglish = EnteredData.GrandNameEnglish,
                Religion = EnteredData.Religion,
                StateNumber = EnteredData.StateNumber
            });
            
            await acas.SaveChangesAsync();
            return (await acas.NewStudentsRequests.OrderBy(x => x.ID).LastOrDefaultAsync()).ID;
        }

    }
}
