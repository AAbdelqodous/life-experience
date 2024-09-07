import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { passwordMatchValidator } from '../shared/password-match.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm: FormGroup;

  // Assign FormBuilder to a class property
  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: passwordMatchValidator  // Add custom validator here
    });    
  }

  get firstName(){
    return this.registrationForm.controls['firstName'];
  }

  get lastName(){
    return this.registrationForm.controls['lastName'];
  }

  get email(){
    return this.registrationForm.controls['email'];
  }

  get password(){
    return this.registrationForm.controls['password'];
  }

  get confirmPassword(){
    return this.registrationForm.controls['password'];
  }

  submitUser(){
    
  }
}
