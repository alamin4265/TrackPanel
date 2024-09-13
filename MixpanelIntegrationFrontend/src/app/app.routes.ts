import { Routes } from '@angular/router';
import { SignuplLoginComponent } from './Component/signupl-login/signupl-login.component';
import { ProductComponent } from './Component/product/product.component';
import { LayoutComponent } from './Component/layout/layout.component';

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
    {
        path: '',
        component: LayoutComponent, 
        children: [
            {
                path: 'products',
                component: ProductComponent,
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'signup-login'
    }
];
