import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  prod: any;
  count: number = 1;
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router, private cartService: CartService) {}
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.http.get(`https://dummyjson.com/products/${id}`).subscribe((result: any) => {
          this.prod = result;
        });
      }
    }
    addToCart(){
      this.cartService.addToCart(this.prod, this.count);
    }
    goBack() {
      this.router.navigate(['/products']);
    }
   
}
