import axios from "axios";
import { resolve } from "path";
import { all, put, takeEvery, spawn, call, fork } from "redux-saga/effects";
import sagaApi from "../../helpers/sagaApi";
import PostType from "../../types/postType";
import { postsActions } from "./postsSlice";

type FetchAllPostsType = {
    data: {
        results: PostType[],
        count: number,
    },
}

const fetchAllPostsWatcher = function* () {
    yield takeEvery(postsActions.fetchAllPosts.type, fetchAllPostsWorker);
};

const fetchAllPostsWorker = function* () {
    yield put(postsActions.setPostsLoading(true));
    yield put(postsActions.setPostsError(undefined));
    yield put(postsActions.setPosts([]));

    try {
        const response: FetchAllPostsType = yield axios.get(`https://studapi.teachmeskills.by/blog/posts?limit=${1000}`);
        yield put(postsActions.setPosts(response.data.results));
    } catch {
        yield put(postsActions.setPostsError("Server error!!!"));
    } finally {
        yield put(postsActions.setPostsLoading(false));
    }
};

type FetchMyPostsType = {
    data: PostType[],
}

const fetchMyPostsWatcher = function* () {
    yield takeEvery(postsActions.fetchMyPosts.type, fetchMyPostsWorker);
};

const fetchMyPostsWorker = function* () {
    yield put(postsActions.setPostsLoading(true));
    yield put(postsActions.setPostsError(undefined));
    yield put(postsActions.setPosts([]));

    try {
        const response: FetchMyPostsType = yield call(sagaApi.get, `/blog/posts/my_posts`);
        yield put(postsActions.setPosts(response.data));
    } catch {
        yield put(postsActions.setPostsError("Server error!!!"));
    } finally {
        yield put(postsActions.setPostsLoading(false));
    }
};


const failedSaga = function* () {
    console.log("failedSaga");
    throw new Error("saga error")
};
const successfulSaga = function* () {
    console.log("successfulSaga");
};


const postsSaga = function* () {
    console.log("Start");
    yield fork(failedSaga);
    yield fork(successfulSaga);
    console.log("End");
}

export default postsSaga;