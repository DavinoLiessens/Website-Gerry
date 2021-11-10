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
        Task<List<CoupleVM>> GetAllCouples(string father, string mother, string name, string sort);
        Task<CoupleVM> CreateCouple(CreateCoupleVM body);
        Task<CoupleVM> DeleteCouple(int id);
        Task<CoupleVM> UpdateCouple(int id, ChangeCoupleVM body);
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

            CoupleVM viewmodel = _mapper.Map<CoupleVM>(couple);

            return viewmodel;
        }

        public async Task<CoupleVM> DeleteCouple(int id)
        {
            Couple couple = await _repo.DeleteCouple(id);
            CoupleVM viewmodel = _mapper.Map<CoupleVM>(couple);
            return viewmodel;
        }

        public async Task<List<CoupleVM>> GetAllCouples(string father, string mother, string name, string sort)
        {
            List<Couple> dbCouples = await _repo.GetAllCouples();

            IQueryable<Couple> query = dbCouples.AsQueryable();

            // query om te filteren
            if (!string.IsNullOrWhiteSpace(father))
            {
                query = query.Where(x => x.Father.ToLower() == father.ToLower());
            }

            if (!string.IsNullOrWhiteSpace(mother))
            {
                query = query.Where(x => x.Mother.ToLower() == mother.ToLower());
            }

            if (!string.IsNullOrWhiteSpace(name))
            {
                query = query.Where(x => x.Name.ToLower() == name.ToLower());
            }


            // query om te sorteren
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "vader":
                        query = query.OrderBy(x => x.Father); ;
                        break;
                    case "moeder":
                        query = query.OrderBy(x => x.Mother); ;
                        break;
                    case "naam":
                        query = query.OrderBy(x => x.Name); ;
                        break;
                }
            }

            List<CoupleVM> viewmodel = _mapper.Map<List<CoupleVM>>(query.ToList());
            return viewmodel;
        }

        public async Task<CoupleVM> GetCouple(int id)
        {
            Couple couple = await _repo.GetCouple(id);
            CoupleVM viewmodel = _mapper.Map<CoupleVM>(couple);
            return viewmodel;
        }

        public async Task<CoupleVM> UpdateCouple(int id, ChangeCoupleVM body)
        {
            Couple couple = await _repo.GetCouple(id);

            if(body.Name != null)
            {
                couple.Name = body.Name.ToString();
            }
            if (body.Father != null)
            {
                couple.Father = body.Father.ToString();
            }
            if (body.Mother != null)
            {
                couple.Mother = body.Mother.ToString();
            }
            if (body.Child1 != null)
            {
                couple.Child1 = body.Child1.ToString();
            }
            if (body.Child2 != null)
            {
                couple.Child2 = body.Child2.ToString();
            }
            if (body.Child3 != null)
            {
                couple.Child3 = body.Child3.ToString();
            }
            if (body.Child4 != null)
            {
                couple.Child4 = body.Child4.ToString();
            }
            if (body.Child5 != null)
            {
                couple.Child5 = body.Child5.ToString();
            }
            if (body.Child6 != null)
            {
                couple.Child6 = body.Child6.ToString();
            }
            if(body.Description != null)
            {
                couple.Description = body.Description.ToString();
            }

            couple = await _repo.ChangeCouple(couple);
            CoupleVM viewmodel = _mapper.Map<CoupleVM>(couple);

            return viewmodel;
        }
    }
}
