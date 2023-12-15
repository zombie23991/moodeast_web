import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css'],
})
export class ContactarComponent implements OnInit {
  form: FormGroup; // Declaración de la propiedad form

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Inicialización en el constructor
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(200)]],
    });

    this.form.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit() {
    // Puedes realizar configuraciones adicionales en ngOnInit si es necesario
  }

  // Puedes agregar cualquier lógica adicional, como manejar el envío del formulario
  submitForm() {
    // Lógica para manejar el envío del formulario, si es necesario
  }
}
