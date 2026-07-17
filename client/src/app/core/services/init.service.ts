import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  private cartService = inject(CartService);

  init() {
    const cartId = localStorage.getItem('cart_id');
    const cart$ = cartId
      ? this.cartService.getCart(cartId).pipe(catchError(() => of(null)))
      : of(null);

    return cart$;
  }
}
