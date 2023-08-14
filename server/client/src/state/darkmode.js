//redux reducers
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    mode: "light",
    userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
    }
})

// exporting setMode, calling setMode(light)
export const { setMode } = globalSlice.actions;
//by importing, can acess reducers definded in globalSlice funciton.
export default globalSlice.reducer; //access as globalReucer