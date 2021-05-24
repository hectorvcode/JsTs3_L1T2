export class Person {
    private personName:string;
    private email:string;

    constructor(personName:string, email:string){
        this.personName = personName;
        this.email = email;
    }

    getPersonName():string{
        return this.personName;
    }

        getEmail():string{
        return this.email;
    }

}