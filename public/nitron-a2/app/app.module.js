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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// App
var app_component_1 = require('./app.component');
// Pages
var page_service_1 = require('./page/page.service');
var page_form_component_1 = require('./page/page-form.component');
var page_list_component_1 = require('./page/page-list.component');
var page_list_item_component_1 = require('./page/page-list-item.component');
var page_details_component_1 = require('./page/page-details.component');
// Contents
var content_service_1 = require("./content/content.service");
// Router
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                page_list_component_1.PageListComponent,
                page_list_item_component_1.PageListItemComponent,
                page_form_component_1.PageFormComponent,
                page_details_component_1.PageDetailsComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                page_service_1.PageService,
                content_service_1.ContentService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map