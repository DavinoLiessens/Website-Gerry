using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.DB_Models
{
    public class Couple
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Mother { get; set; }
        [Required]
        public string Father { get; set; }
        [Required]
        public string Child1 { get; set; }
        public string Child2 { get; set; }
        public string Child3 { get; set; }
        public string Child4 { get; set; }
        public string Child5 { get; set; }
        public string Child6 { get; set; }
        [StringLength(200)]
        public string Description { get; set; }
    }
}
