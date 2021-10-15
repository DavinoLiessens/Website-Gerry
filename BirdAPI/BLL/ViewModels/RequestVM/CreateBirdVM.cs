using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.ViewModels
{
    public class CreateBirdVM
    {
        public string Ringnummer { get; set; }
        public string Geslacht { get; set; }
        public string Soort { get; set; }
        public int? Jaartal { get; set; }
        public int? Kotnummer { get; set; }
        public string Kleur { get; set; }
        public string Kweker { get; set; }
        public int EigenaarID { get; set; }

        public string Omschrijving { get; set; }
        public bool Dood { get; set; }
    }
}
