using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.ViewModels
{
    public class OwnerVM
    {
        public int ID { get; set; }
        public string Voornaam { get; set; }
        public string Achternaam { get; set; }
        public string Telefoon { get; set; }
        public string Email { get; set; }
    }
}
