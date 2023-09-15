
import { createReducer } from '@reduxjs/toolkit';
import signIn from '../actions/authAction';
const initialState = {
    user: {
        online: false
    },
    loading: false,
    error: null,
}

const authReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(signIn.fulfilled, (state, action) => {
            console.log('actionReducer');
            console.log(action);
            const newState = {
                ...state
            }
            if (action.payload.error) {
                newState.error = action.payload.error
                newState.user = initialState.user
            } else {
                newState.user = action.payload
                newState.error = null
            }

            return newState
        })

)

export default authReducer