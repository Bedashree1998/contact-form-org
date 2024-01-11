import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  ContactFormInput: FormGroup;
  formData: any;
  selectedImage!: string | ArrayBuffer;

  constructor(private fb: FormBuilder, private contactFormService: ContactFormService, private router: Router) {
    this.ContactFormInput = this.fb.group({
      imageUrl: ['', [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
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

  onSubmit() {
    console.log(this.ContactFormInput.value);
    this.formData = this.ContactFormInput.value;
    console.log(this.formData);
    this.contactFormService.addFormData(this.formData);
    this.router.navigate(['/']);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  onImageSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  
}



  

     




