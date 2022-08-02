using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using my_app_api.DTOs;
using my_app_api.Operations;

namespace my_app_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly ILogger<MenuController> _logger;
        private readonly IMenuOperation menuOperation;

        public MenuController(ILogger<MenuController> logger, IMenuOperation menuOperation)
        {
            _logger = logger;
            this.menuOperation = menuOperation;
        }

        [HttpGet(Name = "GetMenu")]
        public List<Menu> GetMenu()
        {
            Thread.Sleep(5000);
            return menuOperation.GetMenus() ?? new List<Menu>();
        }

    }
}
