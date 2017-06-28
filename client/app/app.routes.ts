import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {FormGuideComponent} from "./components/form-guide/form-guide.component";
import {ProductManagementComponent} from './components/product-management/product-management.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'formGuide', component: FormGuideComponent},
  {path: 'productManagement', component: ProductManagementComponent}
];

export const routing = RouterModule.forRoot(routes);

