import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe, MatPaginatorModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  totalProducts: number = 0; 
  pageSize: number = 10;
  pageIndex: number = 0;
  productList: any [] =[];
  
  constructor(private http : HttpClient, private router: Router) { }
  productOBJ: any ={
    "id":0,
    "brand":"",
    "title":"",
    "category": "",
    "price": "",
    "images": "",
    "stock": "",

  }
  ngOnInit(): void{
   
    this.fetchProducts(this.pageIndex, this.pageSize);
  }
  fetchProducts(pageIndex: number, pageSize: number): void {
    const skip = pageIndex * pageSize;
    const apiUrl = `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}&select=brand,title,category,price,images,stock`;
    // const x = this.http.get(apiUrl); //holds observal returns .do not mak http request yet
    this.http.get(apiUrl).subscribe((response: any) => {
      this.productList = response.products;
      this.totalProducts = response.total; 
      debugger;
    });
  }
  onPageChange(event: PageEvent): void {
    debugger;
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchProducts(this.pageIndex, this.pageSize);
    debugger;
  }
  createProduct() {
    if (this.productOBJ) {
      let last:any = this.productList[this.productList.length-1];
      this.productOBJ.id = last.id + 1; 
      let json = JSON.stringify(this.productOBJ);
      console.log(json);
      debugger;
      this.http.post(`https://dummyjson.com/products/add`, json,  {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe((result: any) => {
          this.productList[last.id] = result;            
              });
    }
  }

  updateProduct() {
    if (this.productOBJ) {
    debugger;
      let json = JSON.stringify(this.productOBJ);
      this.http.patch(`https://dummyjson.com/products/${this.productOBJ.id}`, json)
        .subscribe((result: any) => {
          const index = this.productList.findIndex(p => p.id === this.productOBJ.id);
          if (index !== -1) {
            result.brand = this.productOBJ.brand;
            result.title = this.productOBJ.title;
            this.productList[index] = result;         
          }
          this.productOBJ = null; 
        });
    }
  }
  
  onEdit(data: any) {
    this.productOBJ = { ...data}; 
  }
//route: navigate to the route component as mentioned
  viewProductDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  onDelete(id: number){
    this.http.delete("https://dummyjson.com/products/"+id).subscribe((result:any)=>{
      this.productList = this.productList.filter(product => product.id !== id);
    }); 
  }
}