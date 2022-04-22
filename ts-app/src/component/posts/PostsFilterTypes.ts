export enum PostsOrder {
    idAsc = "id",
    idDesc = "-id",
    dateAsc = "date",
    dateDesc = "-date",
}

export enum PostsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_ORDER_TYPE = "SET_ORDER_TYPE",
    SET_AUTHOR_TYPE = "SET_AUTHOR_TYPE",
    SET_LESSON_TYPE = "SET_LESSON_TYPE",
}

type SetPageAction = {
    type: PostsFilterActionTypes.SET_PAGE_TYPE,
    payload: number,
}

type SetLimitAction = {
    type: PostsFilterActionTypes.SET_LIMIT_TYPE,
    payload: number,
}

type SetOrderAction = {
    type: PostsFilterActionTypes.SET_ORDER_TYPE,
    payload: PostsOrder,
}

type SetAuthorAction = {
    type: PostsFilterActionTypes.SET_AUTHOR_TYPE,
    payload: string,
}

type SetLessonAction = {
    type: PostsFilterActionTypes.SET_LESSON_TYPE,
    payload: string,
}

export type PostsFilterAction =
    SetPageAction
    | SetLimitAction
    | SetOrderAction
    | SetAuthorAction
    | SetLessonAction;

type PostsFilterType = {
    limit: number
    page: number
    author?: number
    lesson_num?: number
    ordering: PostsOrder
}

export default PostsFilterType;