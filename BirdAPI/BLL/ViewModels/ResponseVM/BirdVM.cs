﻿using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.ViewModels
{
    public class BirdVM
    {
        public int ID { get; set; }

        public int? Ringnummer { get; set; }
        public string Geslacht { get; set; }
        public string Soort { get; set; }
        public int? Jaartal { get; set; }
        public int? Kotnummer { get; set; }
        public string OwnerFullName { get; set; }
        //public CreateOwnerVM Owner { get; set; }
    }
}