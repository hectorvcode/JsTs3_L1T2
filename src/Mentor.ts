import {Person} from "./Person";

export class Mentor extends Person {
    constructor(personName:string, email:string, password:string){
        super(personName, email, password);
    }
}

