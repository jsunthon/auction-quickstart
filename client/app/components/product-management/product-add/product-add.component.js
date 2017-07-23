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
var ProductAddComponent = (function () {
    function ProductAddComponent(fb) {
        this.fb = fb;
        this.close = new core_1.EventEmitter();
        this._categories = [];
        this.categoriesServer = [{
                name: 'electronics',
                selected: false
            },
            {
                name: 'hardware',
                selected: false
            }, {
                name: '',
                selected: false
            }];
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this._categories.push.apply(this._categories, this.categoriesServer);
        this.createForm();
    };
    ProductAddComponent.prototype.createForm = function () {
        this.addProdForm = this.fb.group({
            title: '',
            price: '',
            description: '',
            categories: this.buildCategories()
        });
    };
    ProductAddComponent.prototype.buildCategories = function () {
        var _this = this;
        var arr = this._categories.map(function (category) {
            return _this.fb.control(category.selected);
        }); // [true, false, ...]
        return this.fb.array(arr);
    };
    Object.defineProperty(ProductAddComponent.prototype, "categories", {
        get: function () {
            return this.addProdForm.get('categories');
        },
        enumerable: true,
        configurable: true
    });
    ProductAddComponent.prototype.closeForm = function () {
        this.close.emit('productAdd');
    };
    return ProductAddComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductAddComponent.prototype, "close", void 0);
ProductAddComponent = __decorate([
    core_1.Component({
        selector: 'product-add',
        templateUrl: 'app/components/product-management/product-add/product-add.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ProductAddComponent);
exports.ProductAddComponent = ProductAddComponent;
var Category = (function () {
    function Category() {
    }
    return Category;
}());
//# sourceMappingURL=product-add.component.js.map