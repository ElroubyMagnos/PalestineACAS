import { StudentRequest } from "./studentrequest";

export interface StudentDadRequest {
    id: number;
    dadSocialState: string;
    dadPhone: string;
    dadJob: string;
    dadName: string;
    studentRequestID: number;
    studentClass: StudentRequest;
}