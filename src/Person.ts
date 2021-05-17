export class Person {
    private personName:string;
    private email:string;
    protected password: string;

    constructor(personName:string, email:string, password:string){
        this.personName = personName;
        this.email = email;
        this.password = password;
    }

    getPersonName():string{
        return this.personName;
    }

    getPassword():string{
        return this.password;
    }

    getEmail():string{
        return this.email;
    }
}