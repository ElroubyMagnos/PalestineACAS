import { StudentDadRequest } from "./studentdadrequest";

export interface StudentRequest {
    id: number;
    takhsos: string;
    earned: string;
    disability: string;
    dadDeath: string;
    stateNumber: number;
    familyName: string;
    grandName: string;
    dadName: string;
    firstName: string;
    familyNameEnglish: string;
    grandNameEnglish: string;
    dadNameEnglish: string;
    firstNameEnglish: string;
    merry: string;
    birthPlace: string;
    birthDate: string;
    boy: boolean;
    disabilityType: string;
    religion: string;
    whatsNumber: string;
    phoneNumber: string;
    nzohPlace: string;
    address: string;
    state: string;
    yearTaken: number;
    secondaryMark: string;
    typeOfSecondary: string;
    certificate: string;
    identityPicture: string;
    bornPicture: string;
    selfPicture: string;
    studentDadClass: StudentDadRequest;
}