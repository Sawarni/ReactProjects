using my_app_api.DTOs;

namespace my_app_api.Operations
{
    public interface IMenuOperation
    {
        List<Menu>? GetMenus();
    }
}