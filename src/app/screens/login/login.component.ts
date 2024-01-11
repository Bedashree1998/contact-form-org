import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginFormInput: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.LoginFormInput = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  
  }

  onSubmit() {
    console.log(this.LoginFormInput.value);
    if (this.LoginFormInput.valid) {
      console.log('Registration Form Data:', this.LoginFormInput.value);
    }
    this.router.navigate(['/']);
  }




}
