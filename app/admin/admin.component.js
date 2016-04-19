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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var form_component_1 = require('../form/form.component');
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        router_1.RouteConfig([
            { path: '/add', name: 'Add', component: form_component_1.FormComponent, data: { mode: 'add' }, useAsDefault: true },
            { path: '/update/:isbn', name: 'Update', component: form_component_1.FormComponent, data: { mode: 'update' } }
        ]),
        core_1.Component({
            directives: [router_1.RouterOutlet],
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map