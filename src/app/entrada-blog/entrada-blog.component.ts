import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-entrada-blog',
  templateUrl: './entrada-blog.component.html',
  styleUrls: ['./entrada-blog.component.css'],
})
export class EntradaBlogComponent implements AfterViewInit {
  newslatter: SafeResourceUrl;

  //Para mostrar imagenes de dentro del proyecto
  constructor(private sanitizer: DomSanitizer) {
    //Ruta relativa de la imagen
    const newslatter = 'assets/images/icons/newsletter.png';

    //Genera una URL segura para la imagen
    this.newslatter = this.sanitizer.bypassSecurityTrustResourceUrl(newslatter);
  }

  //Funcion para hacer automaticamente la tabla de contenidos
  ngAfterViewInit() {
    const headers = document.querySelectorAll(
      '#contenidoEntrada > h2, #contenidoEntrada > h3, #contenidoEntrada > h4, #contenidoEntrada > h5, #contenidoEntrada > h6'
    );
    const tablaContenido = document.getElementById('tablaContenido');

    let contenidoHTML = '<ol>';

    headers.forEach((header: Element) => {
      const headerText = header.textContent;
      const headerId = 'header-' + Math.random().toString(36).substr(2, 9); // Generar un ID único

      header.setAttribute('id', headerId); // Agregar ID al encabezado

      const indentationLevel = this.getHeaderIndentationLevel(header);
      const listItemStyle = `style="margin-left: ${indentationLevel * 20}px;"`; // Aplicar sangría según el nivel de anidamiento

      contenidoHTML += `<li ${listItemStyle}><a href="#${headerId}" style="text-decoration:none; color: var(--primary-color); margin-bottom: 8px; line-height: 22px;" onclick="event.preventDefault(); document.getElementById('${headerId}').scrollIntoView({ behavior: 'smooth' });">${headerText}</a></li>`;
    });

    contenidoHTML += '</ol>';

    if (tablaContenido) {
      tablaContenido.innerHTML = contenidoHTML;
    }
  }

  private getHeaderIndentationLevel(header: Element): number {
    const headerLevel = parseInt(header.tagName.substring(1));
    let indentationLevel = 0;
    let currentHeader = header.previousElementSibling;

    while (currentHeader) {
      const currentHeaderLevel = parseInt(currentHeader.tagName.substring(1));

      if (currentHeaderLevel < headerLevel) {
        indentationLevel++;
      }

      currentHeader = currentHeader.previousElementSibling;
    }

    return indentationLevel;
  }
}
