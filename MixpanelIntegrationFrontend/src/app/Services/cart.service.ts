import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MixpanelService } from '../Shared/Services/mixpanel.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(
    private mixpanelService: MixpanelService
  ){}

  addProductToCart(product: any, quantity: number) {
    throw new Error('Method not implemented.');
  }
  private cart: any = JSON.parse(localStorage.getItem('cartItems') || '[]');
  private totalPrice = 0;
  private cartCount : number = 0;
 
  addToCart(product: any, count: number) {
    
    this.mixpanelService.trackEvent('AddToCart', { Title: product.title});

    const existingProduct = this.cart.find((item:any) => item.title === product.title);
    
    if (existingProduct) {
      existingProduct.count += count;  
    } else {
      const cartItem = {
        title: product.title,
        category: product.category,
        price: product.price,
        count: count,
        images: product.images,
      };
      this.cart.push(cartItem);
      localStorage.setItem('cartItems',JSON.stringify(this.cart));
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
  }


  getTotalPrice() {
    return this.totalPrice;
  }

  getTotalCount() {
    return this.cartCount;
  }
  removeProductFromCart(product: any) {
    this.cart = this.cart.filter((item: { title: any; }) => item.title !== product.title);
    localStorage.setItem('cartItems',JSON.stringify(this.cart));
    this.getCartItems();
  }

  clearCart() {
    this.cart = [];
  }

  incrementQuantity(id: number){
    let item = this.cart.find((i: { id: number; })=>i.id ===id);
    if(item){
      item.count++;
    }
  }

  decrementQuantity(id: number){
    let item = this.cart.find((i: { id: number; })=>i.id ===id);
    if(item){
      item.count--;
    }
  }
}
