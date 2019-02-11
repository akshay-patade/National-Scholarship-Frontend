import {  Component } from '@angular/core'
import { Student } from './student';


@Component({
    selector: 'student-registration',
    templateUrl: './student-registration.component.html',

})
export class StudentRegistrationComponent {
    students: Student=new Student();
    
    constructor(st: StudentService)
    

}  