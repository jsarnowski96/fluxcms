using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluxCms.Model.Models;
using FluxCms.Services;
using Microsoft.AspNetCore.Mvc;

namespace FluxCms.Controllers
{
    [Route("api/registration")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        protected readonly IRegistrationService _registrationService;
        public RegistrationController(IRegistrationService registrationService)
        {
            _registrationService = registrationService;
        }
        [HttpPost("[action]")]
        [Route("CreateAccount")]
        public async Task<IActionResult> CreateAccount([FromBody]Users user)
        {

            var result = await _registrationService.RegisterUserAsync(user);
            return Ok(1);
        }
    }
}