export interface patientBill{
    id: number;
    patientName: string,
    age: string,
    patientPhone: string,
    patientAddress: string,
    gender: string,
    doctorName: string, 
    department: string,
    cabinType: string,
    roomNumber:string,
    price: number,
    description: string,
    admissionDate: string,
    releaseDate: string,
    stayingDays: number;
    total: number;
    discount: number;
    doctorVisit: string;
    visitDate: String;
    doctorCharge: number;
    case: string;
    medicine:string;
    medicinePrice: number;
    surgeryDetails: string;
    surgeryCost: number;
}