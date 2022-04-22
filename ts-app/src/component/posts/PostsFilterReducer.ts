import PostsFilterType, { PostsFilterActionTypes, PostsOrder, PostsFilterAction } from "./PostsFilterTypes";


export const initialState: PostsFilterType = {
    page: 1,
    limit: 10,
    ordering: PostsOrder.idAsc,
}

export const PostsFilterReducer = (state: PostsFilterType, action: PostsFilterAction ): PostsFilterType => {
    switch(action.type) {
        case PostsFilterActionTypes.SET_PAGE_TYPE:
            return {
                ...state,
                page: action.payload
            }
        case PostsFilterActionTypes.SET_LIMIT_TYPE:
            return { 
                ...state,
                page: 1,
                limit: action.payload
            }
        case PostsFilterActionTypes.SET_ORDER_TYPE:
            return { 
                ...state,
                ordering: action.payload
            }
        case PostsFilterActionTypes.SET_AUTHOR_TYPE: {
            const numValue = +action.payload;
            if (isNaN(numValue)) {
                return state;
            }
    
            const author = numValue > 0 ? numValue : undefined;
            return { 
                ...state,
                author
            }
        }
        case PostsFilterActionTypes.SET_LESSON_TYPE:
            const numValue = +action.payload;
            if (isNaN(numValue)) {
                return state;
            }
    
            const lesson_num = numValue > 0 ? numValue : undefined;
            return { 
                ...state,
                lesson_num
            }
        default: return state;
    }
}