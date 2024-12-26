using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Models.Lists
{
    public class ContentOf
    {
        public int ID {get;set;}
        public string Name {get;set;}
        public int ParentListID {get;set;}
        public ListOf ParentList {get;set;}
    }
}