import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';


export const userGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router)
if(localStorage.getItem('user_id')){
  return true;
}else{
  Swal.fire({
    title: 'Error',
    text: 'Please login first ',
    icon: 'error',
    confirmButtonText: 'Close'
  })
  _Router.navigate(['/login'])
 return false;
}

};
