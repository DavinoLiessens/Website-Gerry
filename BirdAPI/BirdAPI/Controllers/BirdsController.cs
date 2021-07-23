using BLL.Services;
using BLL.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BirdAPI.Controllers
{
    [Route("api/v1/birds")]
    [ApiController]
    public class BirdsController : Controller
    {
        private readonly IBirdService _birdService;

        public BirdsController(IBirdService birdService)
        {
            _birdService = birdService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBird(int id)
        {
            BirdVM vm = await _birdService.GetBird(id);
            return Ok(vm);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBirds(string soort)
        {
            List<BirdVM> vm = await _birdService.GetAllBirds(soort);
            return Ok(vm);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> ChangeBird(int id, [FromBody] ChangeBirdVM body)
        {
            BirdVM vm = await _birdService.ChangeBird(id, body);
            return Ok(vm);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBird(int id)
        {
            BirdVM vm = await _birdService.DeleteBird(id);
            return Ok(vm);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBird([FromBody] CreateBirdVM body)
        {
            BirdVM vm = await _birdService.CreateBird(body);
            return Ok(vm);
        }
    }
}
