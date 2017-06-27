"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("../../services/product.service");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
require("rxjs/add/operator/distinctUntilChanged");
var HomeComponent = (function () {
    function HomeComponent(productService) {
        this.productService = productService;
        this.searchTerms = new Subject_1.Subject();
        this.titleFilter = new forms_1.FormControl();
        this.startSearch = false;
    }
    HomeComponent.prototype.search = function (key) {
        var _this = this;
        if (!this.startSearch) {
            this.startSearch = true;
            this.products = this.searchTerms
                .debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) {
                console.log('Got new value: ' + key);
                return term ? _this.productService.getProductsSearch(term) : Observable_1.Observable.of([]);
            })
                .catch(function (error) {
                console.error(error);
                return Observable_1.Observable.of([]);
            });
        }
        this.searchTerms.next(key);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/components/home/home.component.html',
        styleUrls: ['app/components/home/home.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map