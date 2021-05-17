import {Mentor} from "./Mentor";

export class Conference {
    protected conferenceName:string;
    public startingDate:string;
    public endingDate:string;
    protected instructor:Mentor;
    protected participants:string[];

    constructor(conferenceName:string, startingDate:string, endingDate:string,
                instructor:Mentor, participants:string[]){
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

    getParticipants():string[]{
        return this.participants;
    }
}