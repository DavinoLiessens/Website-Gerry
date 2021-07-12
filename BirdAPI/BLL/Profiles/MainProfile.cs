using AutoMapper;
using BLL.ViewModels;
using DAL.DB_Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Profiles
{
    public class MainProfile : Profile
    {
        public MainProfile()
        {
            // BIRD
            CreateMap<Bird, BirdVM>();
            CreateMap<CreateBirdVM, Bird>();
            CreateMap<ChangeBirdVM, Bird>();
            CreateMap<ChangeBirdVM, BirdVM>();
            CreateMap<BirdVM, CreateBirdVM>();

            // OWNER
            CreateMap<Owner, OwnerVM>();
            CreateMap<CreateOwnerVM, Owner>();
            CreateMap<ChangeOwnerVM, Owner>();
            CreateMap<ChangeOwnerVM, OwnerVM>();
        }
    }
}
