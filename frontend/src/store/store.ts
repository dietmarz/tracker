import {configureStore} from "@reduxjs/toolkit";
import {trackSlice} from "./track-slice.ts";

configureStore({
    reducer: {
        track: trackSlice.reducer
    }
});