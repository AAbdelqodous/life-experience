import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  // Assign FormBuilder to a class property
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private messageService: MessageService) {
    // Initialize the form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  authenticateUser() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.authenticate({ body: { email, password } })
        .subscribe({
          next: (response) => {
            console.log('Authentication successful', response);
            // Store the token in localStorage or a secure storage mechanism
            if (response.token) {
              sessionStorage.setItem('authToken', response.token);
            }
            // Navigate to a protected route or dashboard
            this.router.navigate(['/home']);
          },
          error: (error) => {
            console.error('Authentication failed', error);

            // Extract the error message from the response
            let errorMessage = 'Login failed'; // Default message

            if (error.error && error.error.error) {
              errorMessage = error.error.error; // Use the error message from the backend
            } else if (error.message) {
              errorMessage = error.message; // Use a more generic error message
            }
            console.error('$$.. Authentication failed: ', errorMessage);

            // Handle error (e.g., show error message to user)
            this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage});
          }
        });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.loginForm.markAllAsTouched();
    }
  }
}
