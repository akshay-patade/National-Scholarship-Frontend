import { Component } from "@angular/core";
import { Institute } from './institute';


@Component({
selector : 'login',
templateUrl : './institute-login.component.html'
})

export class InstituteLoginComponent{
    institutes: Institute=new Institute();
    response:string;

    // constructor( public is: InstituteService) {


    // }  
    // add(){
    //     this.is.sendToServer(this.institutes).subscribe(
    //         data => {
    //             this.response=data['status']
    //     });
    
}