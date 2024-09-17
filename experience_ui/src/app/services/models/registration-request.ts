/* tslint:disable */
/* eslint-disable */
export interface RegistrationRequest {
  group(
    arg0: 
    { 
      firstName: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null)[])[]; 
      lastName: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null)[])[]; 
      email: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null)[])[]; 
      password: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null)[])[]; 
      confirmPassword: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null)[])[]; 
    }, 
    arg1: 
    { 
      validators: import("@angular/forms").ValidatorFn; 
    }): RegistrationRequest;
  controls: any;
  value: any;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}
