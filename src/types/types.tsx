export interface IProduct {
    id: number;
    imgUrl: string;
    volume: string;
    volumeIcon: string;
    title: string;
    description: string;
    barcode: string;
    manufacturer: string;
    brend: string;
    price: string;
    currency: string;
    tags: number[];
    brand: number[];
    inStock: boolean
}

export interface IBrands {
    id: number;
    name: string;
    products: number;
}

export interface ITags {
    id: number;
    name: string;
}

export interface Ipage {
    name: string;
    route: string;
    isActive: boolean
}