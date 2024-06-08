export interface Item {
    id?: number;
    description: string;
    interval:number;
    url:string;
    xpath:string;
    screenshot:boolean;
}

export const initialState: Item = {
    description: '',
    interval: 0,
    url: '',
    xpath: '',
    screenshot: false,
};