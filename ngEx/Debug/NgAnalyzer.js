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
var core_1 = require("@angular/core");
var Global_1 = require("../Global");
var NgAnalyzer = (function () {
    function NgAnalyzer() {
        this.metadata = [];
    }
    NgAnalyzer.prototype.ngOnInit = function () {
        var _this = this;
        window.__Metadata__.forEach(function (item) {
            item.forEach(function (key, value) {
                // this.metadata.push(value);
                key.forEach(function (key, value) {
                    _this.metadata.push({
                        key: key,
                        value: value
                    });
                });
            });
        });
    };
    NgAnalyzer.prototype.filter = function (name) {
    };
    NgAnalyzer = __decorate([
        Global_1.Global(),
        core_1.Component({
            selector: 'ng-analyzer',
            template: "\n    <input type=\"text\" [(ngModel)]=\"search\">\n    <button (click)=\"filter('Component')\">Component</button>\n    <button (click)=\"filter('Component')\">Directive</button>\n    <button (click)=\"filter('Component')\">Service</button>\n    <br>\n    <pre>\n        <div *ngFor=\"#item of metadata\">\n            {{item | json}}\n        </div>\n    </pre>\n",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], NgAnalyzer);
    return NgAnalyzer;
}());
exports.NgAnalyzer = NgAnalyzer;
//# sourceMappingURL=NgAnalyzer.js.map