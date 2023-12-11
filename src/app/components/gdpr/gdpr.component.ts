import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.css']
})
export class GdprComponent implements OnInit {
  public showNotification: boolean;
  showModal: boolean = false;
  modalCounter: number = 0;

  constructor(private cookieService: CookieService) {
    this.showNotification = !this.cookieService.get('gdprNotificationDismissed');
  }

  ngOnInit() {
  }

  public dismissNotification() {
    this.cookieService.set('gdprNotificationDismissed', 'true', 365); // Configura la cookie para que expire en 365 días
    this.showNotification = false;
  }

  public openPrivacySettings() {
    this.showModal = true;
    this.modalCounter++;
  }

  public closePrivacySettings() {
    this.modalCounter--;
    if (this.modalCounter <= 0) {
      this.showModal = false;
      this.modalCounter = 0;
    }
  }
}



