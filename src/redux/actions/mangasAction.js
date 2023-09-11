import { createAction } from "@reduxjs/toolkit";

const saveAllMangas = createAction("saveMangas", (info) => {

    return {
        payload: info
    }
})

export { saveAllMangas }