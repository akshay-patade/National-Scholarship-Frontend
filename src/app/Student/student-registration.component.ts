import {  Component, Injectable } from '@angular/core'
import { Student } from './student';
import { StudentService } from './student-service';



@Component({
    selector: 'student-registration',
    templateUrl: './student-registration.component.html',

})

@Injectable ()
export class StudentRegistrationComponent {
    students: Student=new Student();
    response:string;
    constructor( public ss: StudentService) {

    }
    add() {
        this.ss.sendToServer(this.students).subscribe(
            data => {
                this.response=data['status']
            }
        );
    }
    

}  