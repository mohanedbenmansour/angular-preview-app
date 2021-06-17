import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-preview-app';
color:string="http://localhost:8100/tabs/tab1";


changeTheme(theme){
this.color="http://localhost:8100/tabs/tab1?theme="+theme;
}

}
