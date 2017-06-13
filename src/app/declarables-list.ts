import {AppComponent}  from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {SearchComponent} from './components/search/search.component';
import {StarsComponent} from './components/stars/stars.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

// pipes
import {SearchFilterPipe} from './pipes/search-filterpipe';

export const declarablesList = [
  AppComponent,
  ProductDetailComponent,
  CarouselComponent,
  FooterComponent,
  NavbarComponent,
  ProductItemComponent,
  SearchComponent,
  StarsComponent,
  HomeComponent,
  SearchFilterPipe
];
