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
    public interface IBirdService
    {
        Task<BirdVM> GetBird(int id);
        Task<List<BirdVM>> GetAllBirds(string soort);
        Task<BirdVM> CreateBird(CreateBirdVM body);
        Task<BirdVM> DeleteBird(int id);
        Task<BirdVM> ChangeBird(int id, ChangeBirdVM body);
    }

    public class BirdService : IBirdService
    {
        private readonly IMapper _mapper;
        private readonly IBirdRepository _repo;

        public BirdService(IMapper mapper, IBirdRepository repo)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<BirdVM> ChangeBird(int id, ChangeBirdVM body)
        {
            Bird bird = await _repo.GetBird(id);

            if (body.Ringnummer != null)
                bird.Ringnummer = body.Ringnummer.Value;
            if (body.Kotnummer != null)
                bird.Kotnummer = body.Kotnummer.Value;
            {
                //if (body.Geslacht != null)
                //    bird.Geslacht = body.Geslacht;
                //if (body.Jaartal != null)
                //    bird.Jaartal = body.Jaartal;
                //if (body.Soort != null)
                //    bird.Soort = body.Soort;
            }
            if (body.EigenaarID != null)
            {
                bird.EigenaarID = body.EigenaarID.Value;
                //string[] names = body.OwnerFullName.Split(' '); // ********** Wat als de achternaam meerdere delen heeft??? *****
                //bird.Eigenaar.Voornaam = names[0];
                //bird.Eigenaar.Achternaam = names[1];
            }

            bird = await _repo.ChangeBird(bird);
            BirdVM viewmodel = _mapper.Map<BirdVM>(bird);
            viewmodel.OwnerFullName = $"{bird.Eigenaar.Voornaam} {bird.Eigenaar.Achternaam}";
            return viewmodel;
        }

        public async Task<BirdVM> CreateBird(CreateBirdVM body)
        {
            Bird bird = _mapper.Map<Bird>(body);
            bird = await _repo.CreateBird(bird);

            BirdVM viewmodel = _mapper.Map<BirdVM>(bird);
            viewmodel.OwnerFullName = $"{bird.Eigenaar.Voornaam} {bird.Eigenaar.Achternaam}";

            return viewmodel;
        }

        public async Task<BirdVM> DeleteBird(int id)
        {
            Bird bird = await _repo.DeleteBird(id);
            BirdVM viewmodel = _mapper.Map<BirdVM>(bird);
            //viewmodel.OwnerFullName = $"{bird.Eigenaar.Voornaam} {bird.Eigenaar.Achternaam}";
            return viewmodel;
        }

        public async Task<List<BirdVM>> GetAllBirds(string soort)
        {
            List<Bird> birds = await _repo.GetAllBirds();

            IQueryable<Bird> query = birds.AsQueryable();

            if (!string.IsNullOrWhiteSpace(soort))
            {
                query = query.Where(x => x.Soort.ToLower().Contains(soort.ToLower()));
            }

            List<BirdVM> viewmodel = _mapper.Map<List<BirdVM>>(query.ToList());

            int i = 0;
            foreach(var item in viewmodel)
            {
                Bird newBird = birds[i];
                item.OwnerFullName = $"{newBird.Eigenaar.Voornaam} {newBird.Eigenaar.Achternaam}";
                i++;
            }
            i = 0;

            return viewmodel;
        }

        public async Task<BirdVM> GetBird(int id)
        {
            Bird dbModel = await _repo.GetBird(id);
            BirdVM viewModel = _mapper.Map<BirdVM>(dbModel);
            viewModel.OwnerFullName = $"{dbModel.Eigenaar.Voornaam} {dbModel.Eigenaar.Achternaam}";
            {//BirdVM viewModel = new BirdVM
             //{
             //    ID = dbModel.ID,
             //    Ringnummer = dbModel.Ringnummer,
             //    Geslacht = dbModel.Geslacht,
             //    Soort = dbModel.Soort,
             //    Jaartal = dbModel.Jaartal,
             //    Kotnummer = dbModel.Kotnummer
             //};
            }
            return viewModel;
        }
    }
}