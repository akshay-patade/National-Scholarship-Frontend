import { Component } from '@angular/core'

import { InstituteService } from './institute-service';
import { Institute } from './institute';


@Component({
    selector: 'institute-registration',
    templateUrl: './institute-registration.component.html',

})
export class InstituteRegistrationComponent {
    institutes: Institute = new Institute();
    response: string;
    comppass: string;
    address: string;
    array = { password: "", msg: "" };
    constructor(public is: InstituteService) {
        
    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    check(instituteForm) {

        let confirm = false;

        if (this.comppass != this.institutes.password) {
            confirm = false;
            this.array['password'] = "Pasword does not match";
        }
        if (confirm) {

            this.is.sendToServer(this.institutes).subscribe(
                data => {
                    this.response = data['status']
                }
            );
        }
    }
}


