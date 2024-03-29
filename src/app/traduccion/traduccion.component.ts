import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-traduccion',
  templateUrl: './traduccion.component.html',
  styleUrls: ['./traduccion.component.css'],
})
export class TraduccionComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['reinounido','espana']);
    translate.setDefaultLang('reinounido');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
