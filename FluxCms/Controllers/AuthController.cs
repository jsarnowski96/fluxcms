﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluxCms.Model.Models;
using FluxCms.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
            if (result == 1)
            {
                user = await _authService.GetSessionData(user);
                HttpContext.Session.SetString("username", user.Username);
                HttpContext.Session.SetInt32("userid", user.Id);
                HttpContext.Session.SetInt32("authority", user.Authority);
            }

            return Ok(result);
        }
        [HttpGet("[action]")]
        [Route("CanAccess")]
        public async Task<IActionResult> CanAccess()
        {

            bool result = false ;
            if (HttpContext.Session.GetString("username") != null && HttpContext.Session.GetString("authority") != null)
            {


                result = true;
            }

            return Ok(result);
        }
        [HttpGet("[action]")]
        [Route("GetAuthority")]
        public async Task<IActionResult> GetAuthority()
        {

            int? result;
            if (HttpContext.Session.GetInt32("authority") != null)
                result = HttpContext.Session.GetInt32("authority");
            else
                result = 0;

            return Ok(result);
        }
        [HttpPost("[action]")]
        [Route("Logout")]
        public async Task<IActionResult> Logout()
        {
             HttpContext.Session.Clear();
            return Ok(true);
        }
    }
}