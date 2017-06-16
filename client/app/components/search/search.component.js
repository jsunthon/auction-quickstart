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
var forms_1 = require("@angular/forms");
var product_service_1 = require("../../services/product.service");
var SearchComponent = (function () {
    function SearchComponent(fb, productService) {
        this.productCategories = productService.getCategories();
        this.formModel = fb.group({
            'prodTitle': ['', this.titleValidator],
            'prodPrice': ['', this.priceValidator],
            'prodCategory': [this.productCategories[0]]
        });
    }
    SearchComponent.prototype.titleValidator = function (formControl) {
        if (formControl.dirty) {
            var title = formControl.value || '';
            return title.length >= 3 ? null : { title: true };
        }
        return null;
    };
    SearchComponent.prototype.priceValidator = function (formControl) {
        if (formControl.dirty) {
            var price = formControl.value;
            if (!price) {
                return { price: true };
            }
            return parseInt(price, 10) > 0 ? null : { price: true };
        }
        return null;
    };
    SearchComponent.prototype.onSearch = function () {
        if (this.formModel.valid) {
            console.log(JSON.stringify(this.formModel.value));
        }
        else {
            console.log('Form is invalid!');
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: 'app/components/search/search.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, product_service_1.ProductService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map