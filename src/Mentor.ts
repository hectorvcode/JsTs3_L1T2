import {Person} from "./Person";

export class Mentor extends Person {
    private password:string;

    constructor(personName:string, email:string, password:string){
        super(personName, email);
        this.password = password;
    }

    getPassword():string{
        return this.password;
    }
}

