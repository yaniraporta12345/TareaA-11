import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  //Crear  atributo de tipo FormBuilder
  constructor(private formBuilder: FormBuilder){ }
  
  registroForm = this.formBuilder.group({
    nombres: ['',{validators: [Validators.required, Validators.pattern('[a-zA-Z ]{10,}')]}],
    email: ['',{validators: [Validators.required, Validators.email]}],
    mensaje: ['',{validators: [Validators.required] }]});

  mostrarResultado: boolean = false;
  // Generar un metodo get para cada campo del formularior reactivo
  get nombres(){return this.registroForm.get('nombres');}
  get email(){return this.registroForm.get('email');}
  get mensaje(){return this.registroForm.get('mensaje');}
  
  // Generar el metodo onSubmit para registrar los datos del formulario en un Array
  datos = new Array();

  onSubmit() {
    if (this.registroForm.valid) {
      this.mostrarResultado = true;
      return;
    }
    this.datos.push({
      Nombres: this.registroForm.get('nombres')?.value,
      Email: this.registroForm.get('email')?.value,
      Mensaje: this.registroForm.get('mensaje')?.value,
    });
    console.log(this.datos);
  }


}
