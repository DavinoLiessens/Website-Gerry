    using BLL.Services;
using BLL.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BirdAPI.Controllers
{
    [Route("api/v1/owners")]
    [ApiController]
    public class OwnersController : Controller
    {
        private readonly IOwnerService _ownerService;
        public OwnersController(IOwnerService ownerService)
        {
            _ownerService = ownerService;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOwner(int id)
        {
            OwnerVM vm = await _ownerService.GetOwner(id);
            return Ok(vm);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllOwners()
        {
            List<OwnerVM> vm = await _ownerService.GetAllOwners();
            return Ok(vm);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOwner([FromBody] CreateOwnerVM body)
        {
            OwnerVM vm = await _ownerService.CreateOwner(body);
            return Ok(vm);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOwner(int id)
        {
            OwnerVM vm = await _ownerService.DeleteOwner(id);
            return Ok(vm);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> ChangeOwner(int id, [FromBody] ChangeOwnerVM body)
        {
            OwnerVM vm = await _ownerService.ChangeOwner(id, body);
            return Ok(vm);
        }
    }
}
