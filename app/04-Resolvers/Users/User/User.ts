/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component, Input} from "@angular/core";
import {Global} from "ngEx/Global";

declare var __moduleName:string;
@Global()
@Component({
    selector:'user-profile',
    moduleId: __moduleName,
    //template:``,
    //styleUrls:['user.css'],
    templateUrl:'User.html'
})
export class User{
    @Input('source')user:any;
}