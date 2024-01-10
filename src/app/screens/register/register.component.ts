import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterFormInput: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder) {
    this.RegisterFormInput = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [''] }, { validator: this.checkPasswords });
    


  }

    onSubmit() {
      console.log(this.RegisterFormInput.value);
      if (this.RegisterFormInput.valid) {
        console.log('Registration Form Data:', this.RegisterFormInput.value);
      }
    }


checkPasswords(group: FormGroup) {
  const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
}
}