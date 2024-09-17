import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { passwordMatchValidator } from '../shared/password-match.directive';
import { AuthenticationService } from '../../services/services/authentication.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationRequest } from '../../services/models/registration-request';
import { Register$Params } from '../../services/fn/authentication/register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    RouterModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    AuthenticationService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm: FormGroup;

  // Assign FormBuilder to a class property
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private messageService: MessageService,
    private router: Router
  ) {
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

  get firstName() {
    return this.registrationForm.controls['firstName'];
  }

  get lastName() {
    return this.registrationForm.controls['lastName'];
  }

  get email() {
    return this.registrationForm.controls['email'];
  }

  get password() {
    return this.registrationForm.controls['password'];
  }

  get confirmPassword() {
    return this.registrationForm.controls['password'];
  }

  submitUser() {
    const postData: Register$Params = {
      body: {
        firstname: this.registrationForm.value.firstName,
        lastname: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password
        // confirmPassword: this.registrationForm.value.confirmPassword
        ,
        group: function (
          arg0: {
            firstName: (string | ((control: import('@angular/forms').AbstractControl) => import('@angular/forms').ValidationErrors | null)[])[];
            lastName: (string | ((control: import('@angular/forms').AbstractControl) => import('@angular/forms').ValidationErrors | null)[])[];
            email: (string | ((control: import('@angular/forms').AbstractControl) => import('@angular/forms').ValidationErrors | null)[])[];
            password: (string | ((control: import('@angular/forms').AbstractControl) => import('@angular/forms').ValidationErrors | null)[])[];
            confirmPassword: (string | ((control: import('@angular/forms').AbstractControl) => import('@angular/forms').ValidationErrors | null)[])[];
          },
          arg1: {
            validators: import('@angular/forms').ValidatorFn;
          }): RegistrationRequest {
          throw new Error('Function not implemented.');
        },
        controls: undefined,
        value: undefined
      }
    };

    // delete postData.body.confirmPassword;
    console.log('-------------- before register ---------------');
    this.authService.register(postData).subscribe(
      response => {
        console.log('-------------- in response ---------------');
        console.log('response:', response),
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered successfully' });
        this.router.navigate(['login']);
      },
      error => {
        console.log('-------------- in error ---------------');
        console.log(error),
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Register failed' });
      }
    )
  }
}
