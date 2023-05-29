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
    admissionDate: Date,
    releaseDate: Date,
    stayingHours: number;
    total: number;
    billDiscount: number;
    doctorVisit: string;
    visitDate: Date;
    doctorCharge: number;
    case: string;
    medicine:string;
    medicinePrice: number;
    surgeryDetails: string;
    surgeryCost: number;
}