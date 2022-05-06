import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import FormValuesType from '../../types/formValuesType';

const URL = "https://studapi.teachmeskills.by/auth/jwt/create/";

type FetchPostsType = {
    access: string,
    refresh: string,
}

export const createTokens = createAsyncThunk<FetchPostsType, FormValuesType>(
    "auth/createTokens",
    async (data) => {
        const response = await axios.post(URL, data);
        return response.data as FetchPostsType
    }
)