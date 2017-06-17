export const GET_STORIES = 'GET_STORIES';
export const STORY_READ = 'STORY_READ';

export const getStories = stories => ({
    type: GET_STORIES,
    stories,
});

export const storyRead = story => ({
    type: STORY_READ,
    story,
});