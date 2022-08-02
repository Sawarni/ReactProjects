using my_app_api.DTOs;
using System.Text.Json;

namespace my_app_api.Repository
{
    public class MenuRepository : IMenuRepository
    {
        private readonly ILogger<MenuRepository> logger;

        public MenuRepository(ILogger<MenuRepository> logger)
        {
            this.logger = logger;
        }

        public List<Menu>? GetAll()
        {
            logger.LogInformation("Method entered.");
            try
            {
                string menuData = File.ReadAllText("App_Data/menu.json");
                if (string.IsNullOrEmpty(menuData))
                    return null;

                List<Menu>? menuList = JsonSerializer.Deserialize<List<Menu>>(menuData, new JsonSerializerOptions
                {
                    AllowTrailingCommas = true,
                    PropertyNameCaseInsensitive = true
                });

                return menuList;
            }
            catch (Exception e)
            {
                logger.LogError(e.Message, e);
                throw;
            }
            finally
            {
                logger.LogInformation("Method exit.");
            }

        }

    }
}
