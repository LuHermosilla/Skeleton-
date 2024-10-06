import { CanActivateFn, Router } from '@angular/router';
import { PermisosService } from './permisos.service';
import { inject } from '@angular/core'

export const validacionGuard: CanActivateFn = (route, state) => {
  

const permisosservice = inject(PermisosService);
  const router = inject(Router);
  if(permisosservice.isLogged()){
    return true;
  }
  else {
    const url = router.createUrlTree(['/login']);
    return url
  }
};