import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    mode: "dark"
}

export const globalSlice = createSlice({
    name: "global",
    state: initialState,
    reducers: {
        setMode: (state) => {
            state.mode === "light" ? "dark" : "light";
        }
    }
})

// exporting setMode, calling setMode(light)
export const { setMode } = globalSlice.actions;
//by importing, can acess reducers definded in globalSlice funciton.
export default globalSlice.reducer; //access as globalReucer