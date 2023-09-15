import { createAction } from "@reduxjs/toolkit";

const saveAllMangas = createAction("saveMangas", (mangas) => {

    return {
        payload: mangas
    }
})
const filtro = createAction("filtro", (info) => {

    return {
        payload: info
    }
})

export { saveAllMangas, filtro }