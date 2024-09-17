import { Routes } from '@angular/router';

import { ProductComponent } from './Component/product/product.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { ProductDetailsComponent } from './Component/product/product-details/product-details.component';
import { AddToCartComponent } from './Component/add-to-cart/add-to-cart.component';
import { SignupLoginComponent } from './Component/signup-login/signup-login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'signup-login',
        pathMatch:'full'
      },
    {
        path:'signup-login',
        component:SignupLoginComponent
    },
    {
        path: '',
        component: LayoutComponent, 
        children: [
            {
                path: 'products',
                component: ProductComponent,
                pathMatch: 'full'
            },
            {
                path: 'product-details/:id',
                component: ProductDetailsComponent,
                pathMatch: 'full'
            }
        ]
    },
    {
        path:'addtocart',
        component:AddToCartComponent
    },
    {
        path: '**',
        redirectTo: 'signup-login'
    },
    
];
