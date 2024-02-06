import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bgAbout: string = "background-color:#1ABC9C";

  header: string = "about component";
  colorStar: string = "color:white";
  colorLine: string = "background-color:white";
  colorHeader: string = 'color:white';
}
