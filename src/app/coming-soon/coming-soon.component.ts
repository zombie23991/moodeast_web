import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
})
export class ComingSoonComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // Agrega más campos según sea necesario
    });
  }
  onSubmit() {
    if (this.formulario.valid) {
      const emailData = this.formulario.value;
      this.emailService.sendEmail(emailData).subscribe(
        (response) => {
          console.log('Correo enviado con éxito', response);
          // Puedes manejar la respuesta del backend aquí
        },
        (error) => {
          console.error('Error al enviar el correo', error);
          // Maneja los errores aquí
        }
      );
    }
  }
}
