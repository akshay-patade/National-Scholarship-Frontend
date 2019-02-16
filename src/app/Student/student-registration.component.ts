import { Component } from '@angular/core'
import { Student } from './student';
import { StudentService } from './student-service';
import { StudentSuccessComponent } from './student-success.component';
import { Router } from '@angular/router';

@Component({
    selector: 'student-registration',
    templateUrl: './student-registration.component.html',

})
export class StudentRegistrationComponent {
    students: Student = new Student();
    success: StudentSuccessComponent;
    uid: string;
    response: string;
    che: Boolean;
    confirmpass: string;
    array = { password: "", msg: "" };

    constructor(public ss: StudentService, private r: Router) {

    }


    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    check(regform) {
        console.log("student reg component called");
        let confirm = true;

        //Verify the password
        if (this.confirmpass != this.students.password) {
            confirm = false;
            this.array['password'] = "Pasword does not match";
        }

        //check whether checkbox is checked or not
        else if (!this.che) {
            confirm = false;
            this.array['msg'] = "Please check the above checkbox";
        }

        //Send the data to the database
        if (confirm) {
            this.ss.sendToServer(this.students).subscribe(
                data => {
                    this.response = data['status'];
                }
            )
            localStorage.setItem('adharNo', this.students.adharNo);
            this.r.navigate(["/student-success"]);
        }

    }
}  