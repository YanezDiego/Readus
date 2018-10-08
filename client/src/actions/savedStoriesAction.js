export const fetchSavedStories = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/techs`)
      .then(resp => resp.json())
      .then(stories => {
        console.log(stories)
        dispatch({type: 'FETCH_SAVED_STORIES_SUCCESS', payload: stories})
      })
  }
}
