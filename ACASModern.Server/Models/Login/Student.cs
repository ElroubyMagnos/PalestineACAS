namespace ACASModern.Server.Models.Students
{
    public class Student
    {
        public int ID {get;set;}
        public string Email {get;set;}
        public string Password {get;set;}
        public double Paid {get;set;}
        public double MustPay {get;set;}
        public int StudentId { get; set; }       // الرقم الجامعي
        public string Major { get; set; }        // التخصص
        public int StudyYear { get; set; }       // السنة الدراسية
        public double GPA { get; set; }  
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
        public bool Boy { get; set; }
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
        public byte[] Certificate {get;set;}
        public byte[] IdentityPicture {get;set;}
        public byte[] BornPicture {get;set;}
        public byte[] SelfPicture {get;set;}
    }
}