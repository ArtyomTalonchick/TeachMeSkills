import { authActions } from "./auth/authSlice";
import * as clickerActions from "./clicker/actionCreators";
import * as postActions from "./post/actionCreators";
import { postsActions } from "./posts/postsSlice";

const actions = {
    ...clickerActions,
    ...postActions,
    ...postsActions,
    ...authActions,
};

export default actions;