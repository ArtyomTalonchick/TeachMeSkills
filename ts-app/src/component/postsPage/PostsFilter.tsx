import React from 'react';
import Pagination from '@mui/material/Pagination';
import { MenuItem, Paper, SelectChangeEvent } from '@mui/material';
import TextField from '../ui/textField/TextField';
import PostsFilterType, { PostsOrder } from './PostsFilterTypes';
import { setLimit, setOrdering, setPage, setAuthor, setLesson } from './PostsFilterActionCreators';
import Select from '../ui/select/Select';

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

    const handleChangeOrdering = (value: string) => {
        dispatch(setOrdering(value as PostsOrder));
    }
    
    const handleChangeLimit = (value: string) => {
        dispatch(setLimit(+value));
    }

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    }

    return (
        <Paper elevation={3} className='posts-filter'>

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
                label="Ordering"
                value={state.ordering}
                setValue={handleChangeOrdering}
            >
                <MenuItem value={PostsOrder.idAsc}>ASC id</MenuItem>
                <MenuItem value={PostsOrder.idDesc}>DESC id</MenuItem>
                <MenuItem value={PostsOrder.dateAsc}>ASC date</MenuItem>
                <MenuItem value={PostsOrder.dateDesc}>DESC date</MenuItem>
            </Select>

            <Select
                label="Posts per page"
                value={state.limit.toString()}
                setValue={handleChangeLimit}
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
        </Paper>
    )
}


export default PostsFilter;