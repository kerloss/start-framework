import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bgHome: string = "background-color:#16A186";  //background color for home component
  imgsrc: string = "./assets/img/user.png";       //image source of the user profile picture
  bgLine: string = "background-color:white";      //background for line component in home page
}
