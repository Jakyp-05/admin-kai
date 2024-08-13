export interface ServiceReq {
    title: string;
    description: string;
    price: number;
}

export interface ServiceRes {
    id: number;
    title: string;
    description: string;
    price: number;
}

export interface ApiError {
    [key: string]: any;
}



