export class user {
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
    mobileNo: number;
    gender: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: number;
    typeOfUser: string;
    image: string;
    userId: string;
}

export class login{
    emailId:string
    password:string
    userId:string
    newPassword:string
}

export class firmDetails {
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
    mobileNo: number;
    gender: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: number;
    typeOfUser: string;
    image: string;
    userId: string;
    firmId : string;
    firmName: string;
    establishedYear: Date;
    description: string;
    category:string;
    parentFirm: string;
    faddress: string;
    fcity: string;
    fstate: string;
    fcountry: string;
    fzipCode: number;
  length: number;
  clientId : string;
}

export class feedback{
    userid:string
    rating:number;
    review:string;
}

export class country{
    id:number;
    sortnumber:string;
    name:string;
    phonecode:number;
}
export class state{
    id:number;
    name:string;
    countryid:number;
}
export class city{
    id:number;
    name:string;
    stateid:number;
}

export class survey{
    rewards:string;
    surveycou:string;
}
export class img{
    image:string
    uid:string
}


export class trsurvey {
    surveyid:string;
    surveyname:string;
    rewards:number;
    startingdate:Date;
    users : number;
    image : string
}

export class names {
    country : string;
    state : string;
    city : string;
}

export class clientUpdate{
    userId: string;
    firmName : string;
    description : string;
    
    parentFirm : string;
    address : string;
    state : string;
    city : string;
    country : string;
    zipCode : string;
}

export class Answers {
    userId : string;
    surveyId: string;
    // questionId : number [] = [];
    answer : string[]=[];
}

