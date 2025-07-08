declare interface ISection {
    title: string;
    category: string;
    img: string;
    price: number;
    isFirstFree: boolean;
    minAge: number;
    maxAge: number;
    address: string;
    buildingTitle: string;
    schedule: (string|null)[];
    description: string;
    contents: string;
}