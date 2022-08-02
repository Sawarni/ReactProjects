using my_app_api.DTOs;

namespace my_app_api.Repository
{
    public interface IMenuRepository
    {
        List<Menu>? GetAll();
    }
}