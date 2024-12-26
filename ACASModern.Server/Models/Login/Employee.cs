using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Models
{
    public class Employee
    {
        public int ID {get;set;}
        public string Name {get;set;}
        public string Password {get;set;}
        public int PermissionID {get;set;}
        public Permission PermissionClass {get;set;}
    }
}