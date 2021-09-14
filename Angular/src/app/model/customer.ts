import { Loan } from "./loan";

export interface Customer{
    id: number,
    sex: string,
    idNumber : string,
    name : string,
    email : string,
    birthDate : Date,
    loans: Array<Loan>
}