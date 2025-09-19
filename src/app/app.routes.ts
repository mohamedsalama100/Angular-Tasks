import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutComponent } from './components/about-component/about-component';
import { ContactComponent } from './components/contact-component/contact-component';
import { Products } from './components/products/products';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { ProductDetail } from './components/product-detail/product-detail';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';

export const routes: Routes = [



      { path: 'home', component:Home },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: Products },
 { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: ProductDetail },
  { path: '', redirectTo: '/products', pathMatch: 'full' },

  
  { path: '**', component: NotFoundComponent }
];
