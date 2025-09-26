import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutComponent } from './components/about-component/about-component';
import { ContactComponent } from './components/contact-component/contact-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { ProductDetail } from './components/product-detail/product-detail';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';
import { SearchProducts } from './components/search-products/search-products';
import { GuestGuard } from './guards/guest-guard';
import { ProductsComponent } from './components/products/products';
export const routes: Routes = [



  




  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetail },
  { path: 'search-products', component: SearchProducts },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent }
];
