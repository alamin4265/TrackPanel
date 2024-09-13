﻿using System.Text.Json.Serialization;

namespace ProductManagement.Domain
{
    public class ProductDto
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
    }
}