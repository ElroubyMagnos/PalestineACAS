using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Connectors
{
    public class StudentSignRequest
    {
        public string Takhsos { get; set; }
        public string Earned { get; set; }
        public string Disability { get; set; }
        public string DadDeath { get; set; }
        public int StateNumber { get; set; }
        public string FamilyName { get; set; }
        public string GrandName { get; set; }
        public string DadName { get; set; }
        public string FirstName { get; set; }
        public string FamilyNameEnglish { get; set; }
        public string GrandNameEnglish { get; set; }
        public string DadNameEnglish { get; set; }
        public string FirstNameEnglish { get; set; }
        public string Merry { get; set; }
        public string BirthPlace { get; set; }
        public DateTime BirthDate { get; set; }
        public string Sex { get; set; }
        public string DisabilityType { get; set; }
        public string Religion { get; set; }
        public string WhatsNumber { get; set; }
        public string PhoneNumber { get; set; }
        public string NzohPlace { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public int YearTaken { get; set; }
        public string SecondaryMark { get; set; }
        public string TypeOfSecondary { get; set; }
    }
}