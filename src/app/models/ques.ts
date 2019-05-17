export class questions {
    question: string;
    clientId: string;
    questionType: string;
    modelId: number;
    questionId: number;
    optionDescription: string[] = [];
    surveyId:string;
}
export class options {
    opt1: string;
    opt2: string;
    opt3: string;
    opt4: string;
    opt5: string;
    opt6: string;
    opt7: string;
    opt8: string;
    opt9: string;
}
export class opts {
    questionId: number;
    optionDescription: string[] = [];
}
export class qmodel{
    modelId:number;
    modelType:string;
}

export class Qdetails{
    question:string;
    modelid:number;
    optiondescription:any[]=[];
    questionid:number;
    
}

export class answers{
    userId:string;
    surveyId:string;
    questionId:number;
    answer:string;
    option:string;
    date:Date;
}