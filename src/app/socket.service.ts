import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {io,Socket} from "socket.io-client"
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:Socket;
   url:string="http://localhost:3000"
  constructor() {
  }

 connectToSocket(){
  this.socket=io(this.url);

 }
  emit(eventname:string,data:any){

    
    this.socket.emit(eventname,data);
  } 
 
}
