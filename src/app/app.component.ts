import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-preview-app';
color:string="https://ionic-nest-crud.herokuapp.com/tabs/tab1";
viewClass:string="phone view_3";


changeTheme(theme){
this.color="https://ionic-nest-crud.herokuapp.com/tabs/tab1?theme="+theme;
}

view(name){
  console.log(name)
if(name=="laying"){
  this.viewClass="phone view_1";

}
else if (name == "side"){
  this.viewClass="phone view_2";

}
else if (name=='front'){
  this.viewClass="phone view_3";

}
}

}
