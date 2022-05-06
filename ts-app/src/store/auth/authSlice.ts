import { createSlice } from "@reduxjs/toolkit"
import { createTokens } from "./authThunks";


type StoreType = {
    access?: string,
    refresh?: string,
    loading: boolean,
    error: boolean,
}

const initialState: StoreType = {
    loading: false,
    error: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createTokens.pending, (state) => {
            state.loading = true;
            state.error = false;
        });

        builder.addCase(createTokens.rejected, (state ) => {
            state.loading = false;
            state.error = true;
        });

        builder.addCase(createTokens.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.access = payload.access;
            state.refresh = payload.refresh;
        });
    }
});

export const authReducer = authSlice.reducer;
export const authActions = {
    ...authSlice.actions,
    createTokens,
};
