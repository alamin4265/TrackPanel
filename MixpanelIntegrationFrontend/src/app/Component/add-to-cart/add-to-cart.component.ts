import { Component, Input } from '@angular/core';
import { CartService } from '../../Services/cart.service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  @Input() product: any;
  quantity: number = 1;
  feedbackMessage: string | null = null;
  cartItems = [];
  // constructor(private cartService: CartService) {}
  totalPrice = 0;

  constructor(private cartService: CartService) {
    debugger;
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  addToCart() {
    debugger;
    if (this.product) {
      this.cartService.addProductToCart(this.product, this.quantity);
      this.feedbackMessage = 'Product added to cart!';
    } else {
      this.feedbackMessage = 'Failed to add product to cart.';
    }
  }
}
