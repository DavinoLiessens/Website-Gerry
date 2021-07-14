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

  ngOnInit(){
    this.birdItems = [
      {
          label: 'Overzicht Database',
          icon: 'pi pi-home',
          routerLink: '/birds'
      },
      {
          label: 'Vogel Aanmaken',
          icon: 'pi pi-plus',
          routerLink: '/birds/create'
      },
      {
          label: 'Vogel Aanpassen',
          icon: 'pi pi-sliders-h',
          routerLink: '/birds/update/:id'
      }
  ];

  this.ownerItems = [
    {
        label: 'Overzicht Database',
        icon: 'pi pi-home',
        routerLink: '/owners'
    },
    {
        label: 'Eigenaar Aanmaken',
        icon: 'pi pi-plus',
        routerLink: '/owners/create'
    },
    {
        label: 'Eigenaar Aanpassen',
        icon: 'pi pi-sliders-h',
        routerLink: '/owners/update/:id'
    }
];
  }
}
