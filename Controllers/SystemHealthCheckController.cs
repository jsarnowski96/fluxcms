using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System.Threading;

namespace FluxCms.Controllers
{
    public class SystemHealthCheckController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}