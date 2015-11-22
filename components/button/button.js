var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, View, bootstrap } from 'angular2/angular2';
let ButtonComponent = class {
    constructor() {
        this.text = 'Click me!';
    }
    click() {
        console.log('clicked');
    }
    ;
};
ButtonComponent = __decorate([
    Component({
        selector: 'ui-button'
    }),
    View({
        template: '<button (click)="click()">{{ text }}</button>'
    })
], ButtonComponent);
bootstrap(ButtonComponent);
//# sourceMappingURL=button.js.map