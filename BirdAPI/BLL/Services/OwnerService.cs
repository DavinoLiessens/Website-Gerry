using AutoMapper;
using BLL.ViewModels;
using DAL.DB_Models;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public interface IOwnerService
    {
        Task<OwnerVM> GetOwner(int id);
        Task<List<OwnerVM>> GetAllOwners(string name, string sort, int? page, int length = 20, string dir = "asc");
        //Task<List<OwnerVM>> GetAllOwners(GetAllOwnersFilterVM filter);
        Task<OwnerVM> CreateOwner(CreateOwnerVM body);
        Task<OwnerVM> DeleteOwner(int id);
        Task<OwnerVM> ChangeOwner(int id, ChangeOwnerVM body);
    }

    public class OwnerService : IOwnerService
    {
        private readonly IMapper _mapper;
        private readonly IOwnerRepository _repo;

        public OwnerService(IOwnerRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<OwnerVM> ChangeOwner(int id, ChangeOwnerVM body)
        {
            Owner owner = await _repo.GetOwner(id);

            if (body.Voornaam != null)
                owner.Voornaam = body.Voornaam;
            if (body.Achternaam != null)
                owner.Achternaam = body.Achternaam;

            owner = await _repo.ChangeOwner(owner);

            return _mapper.Map<OwnerVM>(owner);
        }

        public async Task<OwnerVM> CreateOwner(CreateOwnerVM body)
        {
            Owner owner = _mapper.Map<Owner>(body);
            owner = await _repo.CreateOwner(owner);
            return _mapper.Map<OwnerVM>(owner);
        }

        public async Task<OwnerVM> DeleteOwner(int id)
        {
            Owner owner = await _repo.DeleteOwner(id);
            OwnerVM viewmodel = _mapper.Map<OwnerVM>(owner);
            return viewmodel;
        }

        public async Task<List<OwnerVM>> GetAllOwners(string name, string sort, int? page, int length, string dir)
        {
            List<Owner> dbOwners = await _repo.GetAllOwners();

            IQueryable<Owner> query = dbOwners.AsQueryable();

            // FILTEREN
            if (!string.IsNullOrWhiteSpace(name))
            {
                query = query.Where(x => (x.Voornaam.ToLower() + " " + x.Achternaam.ToLower()).Contains(name.ToLower()));
            }

            // SORTEREN
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "voornaam":
                        if (dir == "asc")
                            query = query.OrderBy(x => x.Voornaam);
                        else if (dir == "desc")
                            query = query.OrderByDescending(x => x.Voornaam);
                        break;
                    case "achternaam":
                        if (dir == "asc")
                            query = query.OrderBy(x => x.Achternaam);
                        else if (dir == "desc")
                            query = query.OrderByDescending(x => x.Achternaam);
                        break;
                }
            }

            // PAGING
            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);

            List<OwnerVM> viewmodel = _mapper.Map<List<OwnerVM>>(query.ToList());
            return viewmodel;
        }

        //public async Task<List<OwnerVM>> GetAllOwners(GetAllOwnersFilterVM filter)
        //{
        //    List<Owner> dbOwners = await _repo.GetAllOwners();

        //    IQueryable<Owner> query = dbOwners.AsQueryable();

        //    if (!.IsNullOrWhiteSpace(filter.FullName))
        //    {
        //        query = query.Where(x => (x.Voornaam.ToLower() + " " + x.Achternaam.ToLower()).Contains(filter.FullName.ToLower()));
        //    }

        //    List<OwnerVM> viewmodel = _mapper.Map<List<OwnerVM>>(query.ToList());
        //    return viewmodel;
        //}

        public async Task<OwnerVM> GetOwner(int id)
        {
            Owner owner = await _repo.GetOwner(id);
            OwnerVM viewmodel = _mapper.Map<OwnerVM>(owner);
            //OwnerVM viewmodel = new OwnerVM()
            //{
            //    ID = owner.ID,
            //    Voornaam = owner.Voornaam,
            //    Achternaam = owner.Achternaam
            //};

            return viewmodel;
        }
    }
}
