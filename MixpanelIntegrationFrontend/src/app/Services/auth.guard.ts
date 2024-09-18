import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localData = localStorage.getItem('loggedUser'); 
  if(localData!=null){
    return true;
  }
  else{
    router.navigate(['/signup-login']);
    return false;
  }
};
