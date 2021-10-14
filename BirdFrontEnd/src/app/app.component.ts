import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bird Database';
  birdItems: MenuItem[];
  ownerItems: MenuItem[];
  coupleItems: MenuItem[];

  ngOnInit(){
    this.birdItems = [
      {
          label: 'Overzicht Vogels',
          icon: 'pi pi-home',
          routerLink: '/birds'
      },
      {
          label: 'Vogel Aanmaken',
          icon: 'pi pi-plus',
          routerLink: '/birds/create'
      }
  ];

  this.ownerItems = [
    {
        label: 'Overzicht Kwekers',
        icon: 'pi pi-home',
        routerLink: '/owners'
    },
    {
        label: 'Kweker Aanmaken',
        icon: 'pi pi-plus',
        routerLink: '/owners/create'
    }
];

this.coupleItems = [
  {
      label: 'Overzicht Koppels',
      icon: 'pi pi-home',
      routerLink: '/couples'
  },
  {
      label: 'Koppel Aanmaken',
      icon: 'pi pi-plus',
      routerLink: '/couples/create'
  }
];
  }
}
