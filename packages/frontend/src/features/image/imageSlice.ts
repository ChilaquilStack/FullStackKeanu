import { createAction, createSlice } from "@reduxjs/toolkit"

export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        image: "",
        error: null,
        loading: false
    },
    reducers: {
        putImage: (state, action) => {
            state.image = action.payload
        },
        putError: (state, action) => {
            state.error = action.payload
        },
        putLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

type QueryType = {
    query: string,
    variables: {
        width: string,
        height: string,
        options: {
            gray: boolean,
            young: boolean
        }
    }
}

export const getImage = createAction<QueryType | unknown>('getImage');

export const { putImage, putError, putLoading } = imageSlice.actions

export default imageSlice.reducer