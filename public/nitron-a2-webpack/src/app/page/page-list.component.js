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
var core_1 = require('@angular/core');
var page_service_1 = require('./page.service.ts');
// import {TranslatePipe} from '../l18n/index';
var PageListComponent = (function () {
    function PageListComponent(pageService) {
        this.pageService = pageService;
        this.pages = [];
        console.log(this.pages);
    }
    PageListComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService
            .getPages()
            .then(function (response) {
            _this.pages = response;
            console.log("data");
            console.log(response);
        });
    };
    PageListComponent.prototype.ngOnInit = function () {
        this.getPages();
        // this._translate.use('pl')
    };
    PageListComponent = __decorate([
        core_1.Component({
            selector: 'page-list',
            template: "<h1>Pages list</h1>\n        <ul>\n                <page-list-item *ngFor=\"let page of pages\" [page]=\"page\"></page-list-item>\n        </ul>",
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService])
    ], PageListComponent);
    return PageListComponent;
}());
exports.PageListComponent = PageListComponent;
//# sourceMappingURL=page-list.component.js.map