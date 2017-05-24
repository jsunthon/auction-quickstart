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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get('/products')
            .map(function (res) {
            var unparsed = res.json();
            return unparsed.map(function (jsonProd) {
                var categories = jsonProd.categories.split(',');
                jsonProd.categories = categories;
                return jsonProd;
            });
        });
    };
    ;
    /**
     * Returns the product with the specified ID.
     * @param id
     * @returns {undefined|Product}
     */
    ProductService.prototype.getProductById = function (id) {
        return this.http.get("/products/" + id)
            .map(function (res) { return res.json()[0]; });
    };
    /**
     * Return the reviews associated with a particular product
     * @param productId
     * @returns {undefined|{id: number, productId: number, timestamp: string, user: string, rating: number, comment: string}|{id: number,
      * productId: number, timestamp: string, user: string, rating: number, comment: string}}
     */
    ProductService.prototype.getProductReviews = function (productId) {
        return this.http.get("/products/" + productId + "/reviews")
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getCategories = function () {
        return [
            'All categories',
            'electronics',
            'hardware',
            'books'
        ];
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map