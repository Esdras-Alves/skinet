import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class IniteService {
  private cartService = inject(CartService);

  init() {
    const cartid = localStorage.getItem('cart_id');
  }
}
