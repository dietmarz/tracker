export interface Item {
    id: number;
    description: string;
    interval:number;
    url:string;
    xpath:string;
    screenshot:boolean;
}

export const initialState: Item = {
    id: 0,
    description: '',
    interval: 0,
    url: '',
    xpath: '',
    screenshot: false,
};