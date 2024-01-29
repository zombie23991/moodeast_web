import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-privacy-modal',
  templateUrl: './privacy-modal.component.html',
  styleUrls: ['./privacy-modal.component.css']
})
export class PrivacyModalComponent implements OnInit{
  @Input() isVisible: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();



  public showNotification: boolean;
  public cookieConsent: boolean;
  public analyticsConsent: boolean;
  public marketingConsent: boolean;

  constructor(
    private cookieService: CookieService,
  ) {
    this.showNotification = !this.cookieService.get('gdprNotificationDismissed');
    this.cookieConsent = this.cookieService.get('cookieConsent') === 'true';
    this.analyticsConsent = this.cookieService.get('analyticsConsent') === 'true';
    this.marketingConsent = this.cookieService.get('marketingConsent') === 'true';
  }

  ngOnInit() {}

  public dismissNotification() {
    this.cookieService.set('gdprNotificationDismissed', 'true', 365); // Configura la cookie para que expire en 365 días
    this.showNotification = false;
  }

  public savePrivacySettings() {
    this.cookieService.set('cookieConsent', this.cookieConsent.toString(), 365);
    this.cookieService.set('analyticsConsent', this.analyticsConsent.toString(), 365);
    this.cookieService.set('marketingConsent', this.marketingConsent.toString(), 365);
    this.closeModal();
  }

  public closeModal() {
    this.isVisible = false;
    this.onClose.emit();
  }

}
