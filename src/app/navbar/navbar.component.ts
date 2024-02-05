import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //////////to animate in navigation bar///////////
  padding: boolean = false;
  padd: boolean = true;
  @HostListener('window:scroll', [])
  onscroll() {
    if (window.scrollY > 50) {
      // this.padd=false;
      this.padding = true;
    } else {
      // this.padd = true;
      this.padding = false;
    }
  }
}
