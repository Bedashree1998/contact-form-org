import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterFormInput: FormGroup;
  formData: any;
  notSame: string ='false';

  constructor(private fb: FormBuilder, private router: Router) {
    this.RegisterFormInput = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [''] , validator: this.checkPasswords });
  }

    onSubmit() {
      console.log(this.RegisterFormInput.value);
      if (this.RegisterFormInput.valid) {
        this.router.navigate(['\login']);
        console.log('Registration Form Data:', this.RegisterFormInput.value);
        
      }
      this.checkPasswords(this.RegisterFormInput);
     
    }


checkPasswords(group: FormGroup) {
  const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    console.log(this.notSame);
    if (password != confirmPassword )  this.notSame = 'true' ;
    console.log(this.notSame);

}

}