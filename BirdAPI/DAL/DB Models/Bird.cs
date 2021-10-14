using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.DB_Models
{
    public class Bird
    {
        public int ID { get; set; }

        [Required]
        public string Ringnummer { get; set; }
        [Required]
        public string Geslacht { get; set; }
        [Required]
        public string Soort { get; set; }
        [Required]
        public int Jaartal { get; set; }
        [Required]
        public int Kotnummer { get; set; }
        [Required]
        public string Kleur { get; set; }
        [Required]
        public string Kweker { get; set; }
        
        public int EigenaarID { get; set; }
        [Required]
        public Owner Eigenaar { get; set; }

        [StringLength(200)]
        public string Omschrijving { get; set; }
    }
}
