import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolios: any[] = [
    { url: './assets/img/poert1.png', alt: 'port1' },
    { url: './assets/img/port2.png', alt: 'port2' },
    { url: './assets/img/port3.png', alt: 'port3' },
    { url: './assets/img/poert1.png', alt: 'port1' },
    { url: './assets/img/port2.png', alt: 'port2' },
    { url: './assets/img/port3.png', alt: 'port3' }
  ];
}
