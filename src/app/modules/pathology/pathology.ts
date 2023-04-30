export interface PathologyBean{
    id: number;
    patientName: string;
    patientPhone:number;
    refferedBy: string;
    gender: string;
    age: number;
    pathologyLists: any[],
    
    total: number;
    testDate: string;
    resultDate: string;

}