import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';


interface theme {
  primary: string,
  secondary: string,
  //tertiary: string,
  //success: string,
  //warning: string,
  //danger: string,
  //dark: string,
  //medium: string,
  //light: string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-preview-app';
  theme: string = "https://ionic-nest-crud.herokuapp.com/tabs?ionic:mode=ios";
  color: any;
  viewClass: string = "phone view_3";
  backgroundColor: string = "background-color:#3880ff"
  //variable for the mode name this will be removed when we change it to toggle instead of buttons

  modeIos: boolean = true;
  constructor(private socketService: SocketService) {

  }


  themes = {
    autumn: {
      primary: '#F78154',
      secondary: '#4D9078',
      tertiary: '#B4436C',
      success: '#10dc60',
      warning: '#ffce00',
      danger: '#f04141',
      light: '#FDE8DF',
      medium: '#FCD0A2',
      dark: '#B89876'
    },
    night: {
      primary: '#8CBA80',
      secondary: '#FCFF6C',
      tertiary: '#FE5F55',
      success: '#10dc60',
      warning: '#ffce00',
      danger: '#f04141',
      medium: '#BCC2C7',
      dark: '#F7F7FF',
      light: '#495867'
    },
    neon: {
      primary: '#39BFBD',
      secondary: '#4CE0B3',
      tertiary: '#FF5E79',
      success: '#10dc60',
      warning: '#ffce00',
      danger: '#f04141',
      light: '#F4EDF2',
      medium: '#B682A5',
      dark: '#34162A'
    },

    cream: {
      primary: '#3EB595',
      secondary: '#FFF447',
      tertiary: '#C9C9C9',
      success: '#10dc60',
      warning: '#ffce00',
      danger: '#f04141',
      light: '#696969',
      medium: '#1A1A1A',
      dark: '#34162A'
    }
  };
  custom: theme = {
    primary: "#3880ff",
    secondary: '#3dc2ff'
    //tertiary: '#7044ff',
    //success: '#10dc60',
    //warning: '#ffce00',
    //danger: '#f04141',
    //dark: '#222428',
    //medium: '#989aa2',
    //light: '#f4f5f8'
  }

  ngOnInit(): void {


    this.socketService
      .connectToSocket()
  }
  //change the custom theme and send it to the ionic app
  changeTheme(theme) {

    this.custom = this.themes[theme];

    this.sendTheme()
  }
  //switch between ios and android
  changeMode(name: string) {
    this.theme = "https://ionic-nest-crud.herokuapp.com/tabs?ionic:mode=" + name;

    this.modeIos = name == "md" ? false : true;
  }

  view(name) {
    if (name == "laying") {
      this.viewClass = "phone view_1";

    }
    else if (name == "side") {
      this.viewClass = "phone view_2";

    }
    else if (name == 'front') {
      this.viewClass = "phone view_3";

    }
  }
  sendTheme() {
    this.socketService.emit("theme", this.custom);

  }

  changeCustomColor(colorName, color) {
    this.custom[colorName] = color;

    this.sendTheme()
    //change the background color of the iframe
    if (colorName == "primary")
      this.backgroundColor = "background-color:"+color;
  }
  //this function is for the custom themes
  setCustomPrimary(color){
    this.custom.primary=color;
    this.backgroundColor = "background-color:"+color;
    this.sendTheme();
  }
  //empty function to prevent keyvalue from sorting
  unsorted() { }
}
