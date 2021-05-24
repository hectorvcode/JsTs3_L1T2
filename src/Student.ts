import {Person} from "./Person";

export class Student extends Person {
    constructor(personName:string, email:string){
        super(personName, email);
    }
}