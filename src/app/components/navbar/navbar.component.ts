import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import 'select2';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentView!: string;

  constructor(private router: Router,) {

  }



  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentView = event.url;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Obtén la posición actual del scroll
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Obtén el elemento de la barra de navegación
    const navbar = $('.navbar');
    const btnlogin = $('.btn-login');
    const backtotop = $('.back-to-top');

    // Establece la clase CSS según la posición del scroll
    if (scrollPosition > 0) {
      navbar.removeClass('transparent');
      // Agrega una clase CSS para el estilo de scroll
      navbar.addClass('scrolled');
      navbar.addClass('shadow');
      backtotop.addClass('active');
    } else {
      navbar.addClass('transparent');
      // Remueve la clase CSS si no hay scroll
      navbar.removeClass('scrolled');
      navbar.removeClass('shadow');
      backtotop.removeClass('active');
    }
  }

  redirectToTop() {
    $('html, body').animate({ scrollTop: 0 }, 1);
  }


}
