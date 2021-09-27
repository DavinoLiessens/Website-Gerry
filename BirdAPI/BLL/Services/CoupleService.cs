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
    public interface ICoupleService
    {
        Task<CoupleVM> GetCouple(int id);
        Task<List<CoupleVM>> GetAllCouples();
        Task<CoupleVM> CreateCouple(CreateCoupleVM body);
        Task<CoupleVM> DeleteCouple(int id);
    }
    public class CoupleService : ICoupleService
    {
        private readonly ICoupleRepository _repo;
        private readonly IMapper _mapper;

        public CoupleService(ICoupleRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<CoupleVM> CreateCouple(CreateCoupleVM body)
        {
            Couple couple = _mapper.Map<Couple>(body);
            couple = await _repo.CreateCouple(couple);
            return _mapper.Map<CoupleVM>(couple);
        }

        public async Task<CoupleVM> DeleteCouple(int id)
        {
            Couple couple = await _repo.DeleteCouple(id);
            CoupleVM viewmodel = _mapper.Map<CoupleVM>(couple);
            return viewmodel;
        }

        public async Task<List<CoupleVM>> GetAllCouples()
        {
            List<Couple> dbCouples = await _repo.GetAllCouples();

            IQueryable<Couple> query = dbCouples.AsQueryable();

            List<CoupleVM> viewmodel = _mapper.Map<List<CoupleVM>>(query.ToList());
            return viewmodel;
        }

        public async Task<CoupleVM> GetCouple(int id)
        {
            Couple couple = await _repo.GetCouple(id);
            CoupleVM viewmodel = _mapper.Map<CoupleVM>(couple);
            return viewmodel;
        }
    }
}
