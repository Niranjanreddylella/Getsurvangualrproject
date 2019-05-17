export class packages {
    pckId: number;
    pckName: string;
    pckDuration: string;
    pckPrice: number;
    pckDescription: number;
}
export class subscribe {
    offerId: string;
    offerName: string;
    discount: number;
    packages: string[] = [];
    status: string;
}
export class offers {
    offerName: string;
    discount: number;
    packages: string[] = [];
    status: string;
}

export class offer {
    offerId: string;
    offerName: string;
    discount: number;
    status: string;
}
export class offerSub {
    surveyId: string;
    pckId: string;
    startingDate: Date;
    endingDate: Date;
    offerId: string;
    status: string;
}