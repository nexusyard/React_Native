import { createSlice } from "@reduxjs/toolkit";
import { string } from "../localization";
import AsyncStorage from "@react-native-async-storage/async-storage";


const initialState = {
    themeColor : 'light',
    language : 'en' 
}

const colorSlice = createSlice({
    name : 'colorReducer',
    initialState: initialState,
    reducers: {
        themeColorHandler : (state, action) => {
            if(state.themeColor === 'light')
            {
                state.themeColor = 'dark';
            }
            else
            {
                state.themeColor = 'light';
            }
        },
        langChangeHandler : (state, action) => {
            state.language = action.payload.code;
            string.setLanguage(state.language);
        }
    }
})

export const { themeColorHandler, langChangeHandler } = colorSlice.actions;
export default colorSlice.reducer;