import {Mentor} from "./Mentor";
import {Student} from "./Student";

export class Conference {
    protected conferenceName:string;
    public startingDate:string;
    public endingDate:string;
    protected instructor:Mentor;
    protected participants:Student[];

    constructor(conferenceName:string, startingDate:string, endingDate:string,
                instructor:Mentor, participants:Student[]){
        this.conferenceName = conferenceName;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.instructor = instructor;
        this.participants = participants;
    }

    getConferenceName():string{
        return this.conferenceName;
    }

    getInstructor():Mentor{
        return this.instructor;
    }

    getParticipants():Student[]{
        return this.participants;
    }

    addParticipants(student:Student): boolean{
        this.participants.push(student)
        return true
    }
}