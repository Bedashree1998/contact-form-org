export interface Contact {
    id: number;
    contactImage: {
        thumbnail: string
    }
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    address: string,
    matriculation: string,
    college: string,
    jobTitle: string,
    company: string,
    yearsOfExperience: number,
    officeAddress: string
    
}