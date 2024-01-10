import { Component } from '@angular/core';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formDataList: any[] = [];
formData: any;

  constructor(private contactFormService: ContactFormService) { }

  ngOnInit() {
    this.contactFormService.formDataList$.subscribe(formDataList => {
      this.formDataList = formDataList;
    });
  }

  panelOpenState = false;
}


