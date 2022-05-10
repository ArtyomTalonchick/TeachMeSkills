import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Storage from "../../helpers/Storage";
import ProfileType from "../../types/profileType";
import { createTokens, fetchProfile } from "./authThunks";


type StoreType = {
    access?: string,
    refresh?: string,
    loading: boolean,
    error: boolean,
    profile: ProfileType,
    logged: boolean,
}

const initialState: StoreType = {
    logged: Storage.get("access", false),
    loading: false,
    error: false,
    access: Storage.get("access", undefined),
    refresh: Storage.get("refresh", undefined),
    profile: {
        username: "",
        id: 0,
        email: "",
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthError: (state, { payload }: PayloadAction<boolean>) => {
            state.error = payload;
        },
        logout: (state) => {
            state.access = undefined;
            state.refresh = undefined;
            state.logged = false;

            Storage.remove("access");
            Storage.remove("refresh");
        }
    },
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
            state.logged = true;

            Storage.set("access", payload.access);
            Storage.set("refresh", payload.refresh);
        });
        

        // builder.addCase(createTokens.rejected, (state ) => {
        //     state.loading = false;
        //     state.error = true;
        // });

        builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
            state.profile = payload;
        });


    }
});

export const authReducer = authSlice.reducer;
export const authActions = {
    ...authSlice.actions,
    createTokens,
    fetchProfile,
};
