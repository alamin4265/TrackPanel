using AutoMapper;
using ProductManagement.Domain;
using ProductManagement.Models;

namespace ProductManagement.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
        }
    }
}
