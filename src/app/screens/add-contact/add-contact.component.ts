import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  constructor(private _fb: FormBuilder, private _contact: ContactFormService) {}

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
        phoneNumber: ["",[Validators.required, Validators.minLength(10)]],
        address: ["", [Validators.required]],
        matriculation: ["", [Validators.required]],
        college: ["", [Validators.required]],
        jobTitle: ["", ],
        company: ["", ],
        yearsOfExperience: ["", ],
        officeAddress: ["", ],
        
      });

    

     
}
}


