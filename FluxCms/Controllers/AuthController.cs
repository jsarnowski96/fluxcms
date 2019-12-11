using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluxCms.Model.Models;
using FluxCms.Services;
using Microsoft.AspNetCore.Mvc;

namespace FluxCms.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {



        protected readonly IAuthService _authService;
        public AuthController(IAuthService authSercvice)
        {
            _authService = authSercvice;
        }
        [HttpPost("[action]")]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]Users user)
        {

            var result = await _authService.Login(user);
            return Ok(result);
        }
    }
}