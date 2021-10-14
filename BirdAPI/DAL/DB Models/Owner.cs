using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.DB_Models
{
    public class Owner
    {
        public int ID { get; set; }
        public string Voornaam { get; set; }
        public string Achternaam { get; set; }

        public string Telefoon { get; set; }
        public string Email { get; set; }
        public ICollection<Bird> Vogels { get; set; }
    }
}
