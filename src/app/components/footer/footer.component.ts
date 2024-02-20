import { Component, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var bootstrap: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements AfterViewInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['espana', 'reinounido']);
    translate.setDefaultLang('espana');
    const browserLang = translate.getBrowserLang() ?? 'espana';
    translate.use(
      browserLang.match(/espana|reinounido/) ? browserLang : 'espana'
    );
  }

  ngAfterViewInit() {
    var dropdownElementList = [].slice.call(
      document.querySelectorAll('.dropdown-toggle')
    );
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  formatOption(lang: any) {
    if (!lang.id) {
      return lang.text;
    }
    var $language = $(
      '<span><img src="' +
        $(lang.element).data('image-src') +
        '" class="img-flag" /> ' +
        lang.text +
        '</span>'
    );
    return $language;
  }
}
