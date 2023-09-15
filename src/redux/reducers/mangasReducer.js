import { createReducer } from "@reduxjs/toolkit";
import { filtro, saveAllMangas } from "../actions/mangasAction";

const initialState = {
    mangas: [],
    checks: '',
    text: ''
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
        .addCase(filtro, (state, action) => {

            // console.log(action.payload);
            const nuevoEstado = {
                ...state
            }

            if (action.payload.checks) {
                nuevoEstado.checks = action.payload.checks
            }
            if (action.payload.text) {
                nuevoEstado.text = action.payload.text
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