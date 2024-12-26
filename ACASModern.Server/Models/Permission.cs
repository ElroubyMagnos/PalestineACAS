using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Models
{
    public class Permission
    {
        public int ID {get;set;}
        public bool CanAcceptStudents {get;set;}
        public Employee EmployeeClass {get;set;}
    }
}