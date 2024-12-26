using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Models
{
    public class StudentDadRequestModel
    {
        public int ID {get;set;}
        [MaxLength(50)]
        public string DadSocialState {get;set;}
        [MaxLength(25)]
        public string DadPhone {get;set;}
        [MaxLength(50)]
        public string DadJob {get;set;}
        [MaxLength(50)]
        public string DadName {get;set;}
        public int StudentRequestID {get;set;}
    }
}