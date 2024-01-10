import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private formDataListSubject = new BehaviorSubject<any[]>([]);
  formDataList$ = this.formDataListSubject.asObservable();

  addFormData(formData: any) {
    const currentData = this.formDataListSubject.value;
    const updatedData = [...currentData, formData];
    this.formDataListSubject.next(updatedData);
  }
}