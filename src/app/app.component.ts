import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-preview-app';
color:string="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=primary";

primary(){
  this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=primary"
  
}
secondary(){
  this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=secondary"
}
success(){
  this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=success"
}
danger(){
  this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=danger"
}
warning(){
  this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=warning"
}
info(){
  this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=info"
}
random(){
  this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?color=random"
}

}
