"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var product_detail_component_1 = require("./components/product-detail/product-detail.component");
var form_guide_component_1 = require("./components/form-guide/form-guide.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'formGuide', component: form_guide_component_1.FormGuideComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map