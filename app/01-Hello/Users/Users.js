System.register(["@angular/core", "./UserProxy", "./User/User"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, UserProxy_1, User_1;
    var Users;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserProxy_1_1) {
                UserProxy_1 = UserProxy_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            }],
        execute: function() {
            Users = (function () {
                function Users(proxy) {
                    this.proxy = proxy;
                }
                Users.prototype.load = function (num) {
                    var _this = this;
                    this.proxy
                        .load(num)
                        .then(function (users) {
                        _this.users = users;
                    });
                };
                Users = __decorate([
                    core_1.Component({
                        selector: 'users',
                        providers: [UserProxy_1.UserProxy],
                        directives: [User_1.User],
                        template: "\n    Number : <input type=\"number\" #i value=\"5\">\n    <button (click)=\"load(i.value)\">Load</button>\n    <hr>\n\n    <user-profile *ngFor=\"let user of users\" [source]=\"user\">\n            {{user.name | json}}\n    </user-profile>\n"
                    }), 
                    __metadata('design:paramtypes', [UserProxy_1.UserProxy])
                ], Users);
                return Users;
            }());
            exports_1("Users", Users);
        }
    }
});
//# sourceMappingURL=Users.js.map