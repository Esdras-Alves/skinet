import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { inject } from '@angular/core';
import { SnackbarService } from '../services/snackbar.service';

export const emptyCardGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const snack = inject(SnackbarService);
  const router = inject(Router);

  if (cartService.itemCount() == undefined) {
    snack.error('Your cart is empty.');
    router.navigateByUrl('/cart');
    return false;
  }

  return true;
};
