"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var declarables_list_1 = require("./declarables-list");
// Services
var product_service_1 = require("./services/product.service");
// Directives
var app_routes_1 = require("./app.routes");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, forms_2.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: declarables_list_1.declarablesList.slice(),
        providers: [product_service_1.ProductService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [declarables_list_1.declarablesList[0]]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map