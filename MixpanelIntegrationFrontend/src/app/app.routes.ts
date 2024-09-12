import { Routes } from '@angular/router';
import { SignuplLoginComponent } from './Component/signupl-login/signupl-login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'signup-login',
        pathMatch:'full'
      },
      {
          path:'signup-login',
          component:SignuplLoginComponent
      },
];
