using BLL.Services;
using BLL.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BirdAPI.Controllers
{
    [Route("api/v1/couples")]
    [ApiController]
    public class CoupleController : Controller
    {
        private readonly ICoupleService _coupleService;

        public CoupleController(ICoupleService coupleService)
        {
            _coupleService = coupleService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCouple(int id)
        {
            CoupleVM vm = await _coupleService.GetCouple(id);
            return Ok(vm);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCouples()
        {
            List<CoupleVM> couples = await _coupleService.GetAllCouples();
            return Ok(couples);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCouple([FromBody] CreateCoupleVM body)
        {
            CoupleVM vm = await _coupleService.CreateCouple(body);
            return Ok(vm);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCouple(int id)
        {
            CoupleVM vm = await _coupleService.DeleteCouple(id);
            return Ok(vm);
        }
    }
}
