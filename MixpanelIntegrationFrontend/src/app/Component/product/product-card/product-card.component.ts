import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() cardClick = new EventEmitter<number>();
  count: number = 1;
  constructor(private cartService: CartService) {}

  // Add product to cart
  addToCart(event: Event) {
    debugger;
    event.stopPropagation();
    this.cartService.addToCart(this.product, this.count);
    this.count = 1;
  }
  onCardClick() {
    this.cardClick.emit(this.product.id);
  }

}