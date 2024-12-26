using ACASModern.Server.Connectors;
using ACASModern.Server.DB;
using ACASModern.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ACASModern.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly ILogger<StudentsController> _logger;

        public StudentsController(ILogger<StudentsController> logger)
        {
            _logger = logger;
        }

        [HttpDelete("DeleteRequestedStudent/{ID}")]
        public async Task<bool> DeleteRequestedStudent(int ID)
        {
            var acas = new ACAS();

            acas.NewStudentsRequests.Remove(await acas.NewStudentsRequests.FirstOrDefaultAsync(x => x.ID == ID));

            await acas.SaveChangesAsync();

            return true;
        }

        [HttpPost("UpdateStudentDadInfo")]
        public async Task<bool> UpdateStudentDadInfo([FromBody] StudentDadSignRequestWithID request)
        {
            var acas = new ACAS();

            acas.NewStudentsRequestsDAD.Update(new StudentDadRequest()
            {
                ID = request.ID,
                DadJob = request.DadJob,
                DadName = request.DadName,
                DadPhone = request.DadPhone,
                DadSocialState = request.DadSocialState,
                StudentRequestID = request.StudentRequestID
            });

            await acas.SaveChangesAsync();

            return true;
        }

        [HttpGet("GetStudentDadInfo/{dadid}")]
        public async Task<StudentDadRequest> GetStudentDadInfo(int dadid)
        {
            var acas = new ACAS();

            return await acas.NewStudentsRequestsDAD.FirstOrDefaultAsync(x => x.ID == dadid);
        }

        [HttpGet("GetNewStudents")]
        public async Task<StudentRequest[]> GetNewStudents()
        {
            var acas = new ACAS();

            var All = await acas.NewStudentsRequests.Include(x => x.StudentDadClass).ToArrayAsync();

            return All;
        }

        [HttpPut("EditStudentRequest")]
        public async Task<bool> EditStudentRequest([FromBody] StudentRequestModel Request)
        {
            var acas = new ACAS();

            acas.NewStudentsRequests.Update(new StudentRequest()
            {
                Address = Request.Address,
                ID = Request.ID,
                Takhsos = Request.Takhsos,
                Earned = Request.Earned,
                Disability = Request.Disability,
                DadDeath = Request.DadDeath,
                StateNumber = Request.StateNumber,
                FamilyName = Request.FamilyName,
                GrandName = Request.GrandName,
                DadName = Request.DadName,
                FirstName = Request.FirstName,
                FamilyNameEnglish = Request.FamilyNameEnglish,
                GrandNameEnglish = Request.GrandNameEnglish,
                DadNameEnglish = Request.DadNameEnglish,
                FirstNameEnglish = Request.FirstNameEnglish,
                Merry = Request.Merry,
                BirthPlace = Request.BirthPlace,
                BirthDate = Request.BirthDate,
                Boy = Request.Boy,
                DisabilityType = Request.DisabilityType,
                Religion = Request.Religion,
                WhatsNumber = Request.WhatsNumber,
                PhoneNumber = Request.PhoneNumber,
                NzohPlace = Request.NzohPlace,
                State = Request.State,
                YearTaken = Request.YearTaken,
                SecondaryMark = Request.SecondaryMark,
                TypeOfSecondary = Request.TypeOfSecondary,
                Certificate = Request.Certificate,
                IdentityPicture = Request.IdentityPicture,
                BornPicture = Request.BornPicture,
                SelfPicture = Request.SelfPicture
            });
            
            await acas.SaveChangesAsync();

            acas.NewStudentsRequestsDAD.Update(new StudentDadRequest()
            {
                ID = Request.StudentDadClass.ID,
                DadJob = Request.StudentDadClass.DadJob,
                DadName = Request.StudentDadClass.DadName,
                DadPhone = Request.StudentDadClass.DadPhone,
                DadSocialState = Request.StudentDadClass.DadSocialState,
                StudentRequestID = Request.StudentDadClass.StudentRequestID
            });

            await acas.SaveChangesAsync();

            return true;
        }
    }
}
