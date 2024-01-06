import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private _fb: FormBuilder) {}
  
    form!: FormGroup;
  
    // POST /api/register
    /*
      {
        "email":"string",
        "firstName":"string",
        "lastName":"string",
        "dob":"",
        "password":"string",
        "favSingers":["abc", "def"]
      }
    */
  
      ngOnInit(): void {
        this.initForm();
      }
    
      initForm() {
        this.form = this._fb.group({
          email: ["", [Validators.required, Validators.email]],
          firstname: ["", [Validators.required]],
          lastname: ["", [Validators.required]],
          dob: ["", [Validators.required]],
          password: [
            "",
            [Validators.required, Validators.minLength(8)],
          ],
          confirmPassword: ["", [Validators.required]]
    });
  
  
  }
  }
  
