import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  saveBackgroundColor(color){
  localStorage.setItem("primaryColor",color)
  }
  loadBackgroundColor(){
    const defaultColor=    "#3880ff"
    if(localStorage.getItem("primaryColor")==null){

      return defaultColor
    }
  
    return localStorage.getItem("primaryColor")
    
  }
}
