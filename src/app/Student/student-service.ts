
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable()

export class StudentService {
    users : User[];
    
constructor(private http:HttpClient){

}
    sendToServer(url,user){
        //our code to be communicated with the server will be here
     return this.http.post(url,user) 
     
      }
    
}