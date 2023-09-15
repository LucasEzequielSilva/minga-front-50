import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const signIn = createAsyncThunk('signIn', async (info) => {

    try {
        console.log(info);
        const res = await axios.post('http://localhost:8080/auth/signin', info)
        console.log(res);
        return res.data.response

    } catch (error) {
        console.log(error)

        // throw new Error(error.response.data.message)
        return {
            error: error.response.data.message
        }
    }

})

export default signIn