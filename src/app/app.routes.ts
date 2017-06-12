import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent}
]

export const routing = RouterModule.forRoot(routes);

