using AutoMapper;
using ProductManagement.Domain;
using ProductManagement.Models;

namespace ProductManagement.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<ProductDto, Product>()
                .ForMember(o => o.Id, opt => opt.Ignore());
        }
    }
}
