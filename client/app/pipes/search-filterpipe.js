"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchFilterPipe = (function () {
    /**
     * Takes a list of objects and filters the irrelevant ones out, if
     * either filter by value or filter by field is falsy
     */
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (list, filterByField, filterByValue) {
        if (!filterByField || !filterByValue) {
            // console.log(filterByField);
            // console.log(filterByValue);
            return list;
        }
        return list.filter(function (item) {
            // console.log(JSON.stringify(item));
            var field = item[filterByField].toLowerCase();
            var filter = filterByValue.toLocaleLowerCase();
            return field.indexOf(filter) >= 0; // locate the index of filter in feilds
        });
    };
    return SearchFilterPipe;
}());
SearchFilterPipe = __decorate([
    core_1.Pipe({
        name: 'searchFilter'
    })
    /**
     * Takes a list of objects and filters the irrelevant ones out, if
     * either filter by value or filter by field is falsy
     */
], SearchFilterPipe);
exports.SearchFilterPipe = SearchFilterPipe;
//# sourceMappingURL=search-filterpipe.js.map