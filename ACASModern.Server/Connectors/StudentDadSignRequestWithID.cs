using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Connectors
{
    public class StudentDadSignRequestWithID
    {
        public int ID { get; set; }
        public string DadName { get; set; }
        public string DadPhone { get; set; }
        public string DadJob { get; set; }
        public string DadSocialState { get; set; }
        public int StudentRequestID { get; set; }
    }
}