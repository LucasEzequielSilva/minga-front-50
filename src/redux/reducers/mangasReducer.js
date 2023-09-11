import { createReducer } from "@reduxjs/toolkit";
import { saveAllMangas } from "../actions/mangasAction";

const initialState = {
    mangas: [],
    filtrados: []
}

const mangasReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(saveAllMangas, (state, action) => {
            // console.log(action);
            console.log(action.payload);

            const nuevoEstado = {
                ...state,
                mangas: action.payload
            }

            return nuevoEstado
        })
    // .addCase()
    // .addCase()
    // .addCase()
    // .addCase()
    // .addCase()
    // .addCase()
)

export default mangasReducer