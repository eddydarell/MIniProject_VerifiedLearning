using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiniProject_VerifiedProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            //VST Test
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public ActionResult QuestionBoard(int categoryNumber = 0)
        {
            switch(categoryNumber)
            {
                case 1: ViewBag.Message = "one";
                    break;
                case 2: ViewBag.Message = "two";
                    break;
                case 3: ViewBag.Message = "three";
                    break;
                case 4: ViewBag.Message = "four";
                    break;
                default:
                    break;
            }
            return View();
        }

        //Bellow, Controller actions I set for each category separately
        //This action shall return a partial view to be rendered in the main Board
        public PartialViewResult Category_One()
        {
            return PartialView("_Category_One");
        }
        public PartialViewResult Category_Two()
        {
            return PartialView("_Category_Two");
        }
        public PartialViewResult Category_Three()
        {
            return PartialView("_Category_Three");
        }
        public PartialViewResult Category_Four()
        {
            return PartialView("_Category_Four");
        }

        public PartialViewResult Category_Mix()
        {
            return PartialView("_Category_Mix");
        }

        public PartialViewResult Category_Top()
        {
            return PartialView("_Category_Top");
        }
        
        //edited from github
        //test fred
    }
}
