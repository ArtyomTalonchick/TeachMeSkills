import React from 'react';
import Pagination from '@mui/material/Pagination';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import TextField from '../ui/textField/TextField';
import PostsFilterType, { PostsOrder } from './PostsFilterTypes';
import { setLimit, setOrdering, setPage, setAuthor, setLesson } from './PostsFilterActionCreators';

type PropsType = {
    count: number
    state: PostsFilterType,
    dispatch: any,
};

const PostsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {

    const updateAuthor = (value: string) => {
        dispatch(setAuthor(value));
    }

    const updateLesson = (value: string) => {
        dispatch(setLesson(value));
    }

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        dispatch(setOrdering(event.target.value as PostsOrder));
    }
    
    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setLimit(+event.target.value));
    }

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    }

    return (
        <div className='posts-filter'>

            <TextField
                label="Author"
                value={state.author?.toString()}
                setValue={updateAuthor}
            />

            <TextField
                label="Lesson"
                value={state.lesson_num?.toString()}
                setValue={updateLesson}
            />

            <Select
                value={state.ordering}
                onChange={handleChangeOrdering}
            >
                <MenuItem value={PostsOrder.idAsc}>ASC id</MenuItem>
                <MenuItem value={PostsOrder.idDesc}>DESC id</MenuItem>
                <MenuItem value={PostsOrder.dateAsc}>ASC date</MenuItem>
                <MenuItem value={PostsOrder.dateDesc}>DESC date</MenuItem>
            </Select>

            <Select
                value={state.limit.toString()}
                onChange={handleChangeLimit}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            <Pagination 
                className='pagination'
                page={state.page}
                onChange={handleChangePage}
                count={Math.ceil(count / state.limit)}
            />
        </div>
    )
}


export default PostsFilter;