import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formDataList: any = [];
formData: any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'phone_no'];

  constructor(private contactFormService: ContactFormService) { }

  ngOnInit() {
    this.contactFormService.formDataList$.subscribe(formDataList => {
      this.formDataList = formDataList;
      this.dataSource = new MatTableDataSource(this.formDataList)
    });
  }

  panelOpenState = false;
}
