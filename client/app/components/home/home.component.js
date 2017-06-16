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
var HomeComponent = (function () {
    function HomeComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.titleFilter = new forms_1.FormControl();
        this.filterCriteria = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return console.error(error); }, function () { return console.log('fnished getting proj attempt'); });
        // valueChanges returns an obsercable of elements received from the input element
        this.titleFilter.valueChanges
            .debounceTime(100)
            .subscribe(assignValue, function (error) { return console.error(error); });
        function assignValue(value) {
            console.log('Got new assigned value: ' + value);
            this.filterCriteria = value;
            console.log('New filter criteria: ' + this.filterCriteria);
        }
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