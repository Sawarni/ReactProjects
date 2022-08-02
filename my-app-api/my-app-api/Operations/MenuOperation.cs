using my_app_api.DTOs;
using my_app_api.Repository;

namespace my_app_api.Operations
{
    public class MenuOperation : IMenuOperation
    {
        private readonly IMenuRepository menuRepository;

        public MenuOperation(IMenuRepository menuRepository)
        {
            this.menuRepository = menuRepository;
        }
        public List<Menu>? GetMenus()
        {
            return menuRepository.GetAll();
        }

    }
}
