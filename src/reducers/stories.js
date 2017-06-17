import { GET_STORIES } from '../actions/storiesAction';

const initialState = {
    stories: [],
};

const stories = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORIES:
            return {
                ...state,
                stories: action.stories,
            };
        default:
            return state;
    }
};

export default stories;