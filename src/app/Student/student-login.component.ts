
import { OnInit, Component } from '@angular/core'
import { Student } from './student';
import { StudentLoginService } from './student-login-service';
import { IfStmt, ConstantPool } from '@angular/compiler';


@Component({
    selector: 'student-login',
    templateUrl: './student-login.component.html',

})
export class StudentLoginComponent {
    response: boolean;

    students: Student = new Student();

    constructor(public studentLoginService: StudentLoginService) {

    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }


    add(regform) {
        console.log("Students datA " + JSON.stringify(this.students));
        this.studentLoginService.sendToServer(this.students).subscribe(
            data => {
                this.response = data['status'];
            }
        )
        if(this.response) {
            console.log("success");
        }
        else {

            console.log("failure");
        }
    }
}





