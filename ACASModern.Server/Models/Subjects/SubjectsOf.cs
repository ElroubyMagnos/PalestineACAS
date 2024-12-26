using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Models.Subjects
{
    public class SubjectsOf
    {
        public int ID {get;set;}
        public string Semester {get;set;}
        public string Specialization {get;set;}
        public string CourseNumber {get;set;}
        public string SubjectName {get;set;}
        public string SubjectNameEnglish {get;set;}
        public int NumberOfCreditHours {get;set;}
        public int Theoreticalhours {get;set;}
        public int Practicalhours {get;set;}
        public string Prerequisite {get;set;}
    }
}