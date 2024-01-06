import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor() { }

  getContacts: Contact[] = [
    {
      id: 1,
      contactImage: {
        thumbnail: "E:\Users\hp\Desktop\Documents folder\Bedashree\Mamun.jpg"
    },
      firstname: "Bedashree",
      lastname: "Sahoo",
      email: "Bas@gmail.com",
      phoneNumber: "9937012354",
      address: "Bhubaneswar",
      matriculation: "2014",
      college: "CET",
      jobTitle: "System Engineer",
      company: "TCS",
      yearsOfExperience: 3,
      officeAddress: "Bhubaneswar"
    },
    {id: 1,
      contactImage: {
        thumbnail: "https://www.shutterstock.com/image-illustration/woman-girl-person-long-hair-wave-2304514079"
    },
      firstname: "Aparna",
      lastname: "Sahoo",
      email: "Bas@gmail.com",
      phoneNumber: "9937012354",
      address: "Bhubaneswar",
      matriculation: "2014",
      college: "CET",
      jobTitle: "System Engineer",
      company: "TCS",
      yearsOfExperience: 3,
      officeAddress: "Bhubaneswar"
    }
  ]
    

}