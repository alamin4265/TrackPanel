import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  addProductToCart(product: any, quantity: number) {
    throw new Error('Method not implemented.');
  }
  private cart: any = [];
  private totalPrice = 0;
  private cartCount : number = 1;
 
  addToCart(product: any, count: number) {
    const existingProduct = this.cart.find((item:any) => item.title === product.title);

    if (existingProduct) {
      existingProduct.count += count;  // Increment the count
    } else {
      const cartItem = {
        title: product.title,
        category: product.category,
        price: product.price,
        count: count,
      };
      this.cart.push(cartItem);
    }
    this.updateCartCount();
    this.calculateTotal();
  }

  
  getCartItems() {
    return this.cart;
  }

  updateCartCount() {
    const totalCount = this.cart.reduce((acc:any, item:any) => acc + item.count, 0);
    this.cartCount=totalCount;
  }

  calculateTotal() {
    this.totalPrice = this.cart.reduce((acc:any, item:any) => acc + item.price * item.count, 0);
    debugger;
  }


  getTotalPrice() {
    return this.totalPrice;
  }

  getTotalCount() {
    return this.cartCount;
  }
}
