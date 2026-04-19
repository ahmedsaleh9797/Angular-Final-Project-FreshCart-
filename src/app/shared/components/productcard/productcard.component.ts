import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";
import { CartService } from '@features/services/cart/cart.service';

@Component({
  selector: 'app-productcard',
  imports: [RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss',
})
export class ProductcardComponent {
  cartService = inject(CartService)

  product = input<product>({} as product)

  addToCartSignal = toSignal(
    this.cartService.addProductToCart(''), 
    { initialValue: null }
  )

  addProductToCart(productId: string) {
    this.addToCartSignal = toSignal(
      this.cartService.addProductToCart(productId),
      { initialValue: null }
    )
  }
}