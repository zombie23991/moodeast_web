import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  colors: string[] = [
    '#8DE48E',
    '#A09CB4',
    '#88C5FF',
    '#8EA0F2',
    '#FFACC2',
    '#EEC55F',
    '#C297D5',
    '#EA9155',
  ];
  images: string[] = [
    'https://moodeast.com/assets/mockups/Verde.png',
    'https://moodeast.com/assets/mockups/Gris.png',
    'https://moodeast.com/assets/mockups/AzulCielo.png',
    'https://moodeast.com/assets/mockups/Azul.png',
    'https://moodeast.com/assets/mockups/Rosa.png',
    'https://moodeast.com/assets/mockups/Amarillo.png',
    'https://moodeast.com/assets/mockups/Morado.png',
    'https://moodeast.com/assets/mockups/Naranja.png',
  ];
  selectedIndex: number = 0;

  constructor() {}

  showImage(index: number) {
    this.selectedIndex = index;
  }
}
