import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PostGrade } from '../../enums/PostGrade';
import PostType from "../../types/postType"
import { fetchPosts } from "./postsThunks";

const getGradesFromStorage = (): GradesType => {
    try {
        return JSON.parse(localStorage.getItem("grades") || "") as GradesType;
    } catch {
        return {};
    }
}

const setGradesToStorage = (data: GradesType) => {
    try {
        localStorage.setItem("grades", JSON.stringify(data));
    } catch {}
}


type GradesType = {
    [prop: number]: PostGrade
}

// grades = {
//     [1]: "like", // пост с id 1 лайкнут
//     [2]: "dislike", // пост с id 2 дизлайкнут
// }

type StoreType = {
    data: PostType[],
    count: number,
    grades: GradesType,
    loading: boolean,
    error?: string,
}

const initialState: StoreType = {
    data: [],
    count: 0,
    grades: getGradesFromStorage(),
    loading: false,
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        likePost: (state, { payload }: PayloadAction<number>) => {
            if (state.grades[payload] === PostGrade.LIKE) {
                delete state.grades[payload];
            } else {
                state.grades[payload] = PostGrade.LIKE;
            }

            setGradesToStorage(state.grades);
        },
        dislikePost: (state, { payload }: PayloadAction<number>) => {
            if (state.grades[payload] === PostGrade.DISLIKE) {
                delete state.grades[payload];
            } else {
                state.grades[payload] = PostGrade.DISLIKE;
            }

            setGradesToStorage(state.grades);
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchPosts.rejected, (state, { payload } ) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const postsReducer = postsSlice.reducer;
export const postsActions = {
    ...postsSlice.actions,
    fetchPosts,
};
