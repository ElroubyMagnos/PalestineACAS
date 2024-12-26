namespace ACASModern.Server.Models.Lists
{
    public class ListOf
    {
        public int ID {get;set;}
        public string NameOf {get;set;}
        public ICollection<ContentOf> Contents {get;set;}
    }
}