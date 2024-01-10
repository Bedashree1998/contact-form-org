import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginFormInput: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder) {
    this.LoginFormInput = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  
  }

  onSubmit() {
    console.log(this.LoginFormInput.value);
    if (this.LoginFormInput.valid) {
      console.log('Registration Form Data:', this.LoginFormInput.value);
    }
  }


}
