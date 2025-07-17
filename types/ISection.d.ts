declare interface ISection {
    id: number;
    title: string;
    category: string;
    subcategory: string;
    img: string;
    price: number;
    isFirstFree: boolean;
    minAge: number;
    maxAge: number;
    address: string;
    buildingTitle: string;
    schedule: (boolean)[];
    timeSlots: string[];
    description: string;
}