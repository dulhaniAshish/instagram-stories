export const GET_STORIES = 'GET_STORIES';

export const getStories = stories => ({
    type: GET_STORIES,
    stories,
});