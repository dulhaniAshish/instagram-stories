import { GET_STORIES, STORY_READ } from '../actions/storiesAction';

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
        case STORY_READ:
            return {
                ...state,
                stories: state.stories.map(story => {
                    if(story.id === action.story.id) {
                        const story = action.story;
                        story.isRead = 1;
                        return story
                    }
                    return story;
                }),
            };
        default:
            return state;
    }
};

export default stories;