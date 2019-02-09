
import { OnInit, Component } from '@angular/core'


@Component({
    selector: 'student-login',
    templateUrl: './student-login.component.html',

})
export class StudentLoginComponent implements OnInit {




    url = "http://localhost:8003/Book-My-Flights/FlightControllerServlet";

    /*
    constructor(private logimservice: StudentLoginService) {

    }*/

    ngOnInit() {

    }
    /*
    getFlights(from,to) {
        this.fs.retrieveFromServer(this.url + '?from='+from + '&to=' + to  ).subscribe(
            data => {
                this.flights =  data;
            });
    } */

}  
