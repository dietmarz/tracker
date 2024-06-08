import {createSlice} from "@reduxjs/toolkit";
import {Item} from "../model/Item.ts";

export const initialState: Item = {
    description: '',
    interval: 0,
    url: '',
    xpath: '',
    screenshot: false,
};


export const trackSlice = createSlice({
    name: 'abc',
    initialState,
    reducers: {

    }

});