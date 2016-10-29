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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var page_service_1 = require('./page.service');
var content_service_1 = require('../content/content.service');
var PageDetailsComponent = (function () {
    function PageDetailsComponent(pageService, contentService, route, location) {
        this.pageService = pageService;
        this.contentService = contentService;
        this.route = route;
        this.location = location;
        this.page = { name: 'ding' };
        this.contents = [];
    }
    PageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['_id'];
            _this.page._id = id;
            // let id = +params['_id'];
            console.log(id);
            _this.contentService.getContentsOfPage(id)
                .then(function (response) {
                console.log(response);
                _this.contents = response;
            });
        });
    };
    PageDetailsComponent = __decorate([
        core_1.Component({
            selector: 'page-form',
            template: "<div class=\"medium-3 columns\">\n                <page-list></page-list>\n            </div>\n            <div class=\"medium-9 columns\">\n                <h1>Page details</h1>\n                <p>{{page.name}}</p>\n                \n                <p>\n                        <strong>_id: </strong>5809b45863afbb80a6509377\n                        <br>\n                        <strong>_created: </strong>{{page._created}}\n                        <br>\n                        <strong>is_deleted: </strong>{{page.is_deleted}}\n                        <br>\n                        <strong>is_visible: </strong>{{page.is_visible}}\n                        <br>\n                        <strong>name: </strong>{{page.name}}\n                        <br>\n                        <strong>order: </strong>{{page.oreder}}\n                        <br>\n                        <strong>parent_id: </strong>{{page.parent_id}}\n                        <br>\n                        <strong>slug: {{page.slug}}</strong>\n                        <br>\n                        <strong>page_keywords: {{page.page_keywords}}</strong>\n                        <br>\n                        <strong>page_description: {{page.page_description}}</strong>\n                        <br>\n                        <br>\n                        <strong><a href=\"/{{page.slug}}/\" target=\"blank\">Go to page by slug</a></strong>\n                        <br>\n                        <strong><a href=\"/pageid/{{page._id}}\" target=\"blank\">Go to page by id</a></strong>\n                        <br>\n                </p>\n                \n                <section *ngFor=\"let content of contents\">{{content.name}}</section>\n            </div>\n\n        ",
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, content_service_1.ContentService, router_1.ActivatedRoute, common_1.Location])
    ], PageDetailsComponent);
    return PageDetailsComponent;
}());
exports.PageDetailsComponent = PageDetailsComponent;
//# sourceMappingURL=page-details.component.js.map