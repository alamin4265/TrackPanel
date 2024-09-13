using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductManagement.Domain;
using ProductManagement.Models;
using ProductManagement.Services;

namespace ProductManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public ProductController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            var productDtos = _mapper.Map<IEnumerable<ProductDto>>(products);
            return Ok(productDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> GetProduct(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            var productDto = _mapper.Map<ProductDto>(product);
            return Ok(productDto);
        }

        [HttpPost]
        public async Task<ActionResult<ProductDto>> CreateProduct([FromBody] ProductDto productDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = _mapper.Map<Product>(productDto);
            var createdProduct = await _productService.CreateProductAsync(product);
            var createdProductDto = _mapper.Map<ProductDto>(createdProduct);

            return CreatedAtAction(nameof(GetProduct), new { id = createdProductDto.Id }, createdProductDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] ProductDto productDto)
        {
            var product = await _productService.GetProductByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            var updatedProduct = await _productService.UpdateProductAsync(_mapper.Map(productDto, product));
            var updatedProductDto = _mapper.Map<ProductDto>(updatedProduct);

            return Ok(updatedProductDto);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            await _productService.DeleteProductAsync(id);
            return NoContent();
        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<ProductDto>>> Search(
            [FromQuery] string? name,
            [FromQuery] decimal? minPrice,
            [FromQuery] decimal? maxPrice,
            [FromQuery] int pageNumber = 1,
            [FromQuery] int pageSize = 10)
        {
            var products = await _productService.SearchAsync(name, minPrice, maxPrice, pageNumber, pageSize);
            var productDtos = _mapper.Map<IEnumerable<ProductDto>>(products);
            return Ok(productDtos);
        }
    }
}
