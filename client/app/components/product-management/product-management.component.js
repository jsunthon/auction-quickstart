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
var ProductManagementComponent = (function () {
    function ProductManagementComponent(productService) {
        this.productService = productService;
    }
    ProductManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return window.alert(error); });
    };
    // Impl delete button
    ProductManagementComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.productService.deleteProduct(product)
            .subscribe(function (deleted) {
            _this.message = deleted ? 'Successfully deleted' : 'Could not delete';
        }, function (err) { return _this.message = err; });
    };
    return ProductManagementComponent;
}());
ProductManagementComponent = __decorate([
    core_1.Component({
        selector: 'product-management',
        templateUrl: 'app/components/product-management/product-management.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductManagementComponent);
exports.ProductManagementComponent = ProductManagementComponent;
//# sourceMappingURL=product-management.component.js.map