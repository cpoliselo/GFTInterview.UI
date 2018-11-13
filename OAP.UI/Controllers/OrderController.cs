using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace OAP.UI.Controllers
{
    public class OrderController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Message"] = "Restaurant Order APP";
            return View();
        }
    }
}