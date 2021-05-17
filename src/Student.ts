import {Person} from "./Person";

export class Student extends Person {
    constructor(personName:string, email:string, password:string){
        super(personName, email, password);
    }
}