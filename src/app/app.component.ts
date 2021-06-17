import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-preview-app';
color:string="http://localhost:8100/tabs/tab1?color=primary";

primary(){
  this.color="http://localhost:8100/tabs/tab1?color=primary"
  
}
secondary(){
  this.color="http://localhost:8100/tabs/tab1?color=secondary"
}
success(){
  this.color="http://localhost:8100/tabs/tab1?color=success"
}
danger(){
  this.color="http://localhost:8100/tabs/tab1?color=danger"
}
warning(){
  this.color="http://localhost:8100/tabs/tab1?color=warning"
}
info(){
  this.color="http://localhost:8100/tabs/tab1?color=info"
}
random(){
  this.color="http://localhost:8100/tabs/tab1?color=random"
}

}
