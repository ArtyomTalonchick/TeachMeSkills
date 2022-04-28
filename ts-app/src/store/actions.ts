import * as clickerActions from "./clicker/actionCreators";
import * as postActions from "./post/actionCreators";

const actions = {
    ...clickerActions,
    ...postActions,
};

export default actions;