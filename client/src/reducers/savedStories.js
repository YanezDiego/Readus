export default function savedStories(state = [], action) {
  switch (action.type) {
      case 'FETCH_SAVED_STORIES_SUCCESS':

      return action.payload

      case 'ADD_STORIE':
        return state.concat(action.payload)

    default:
      return state

  }
}
