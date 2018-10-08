export const fetchSavedStories = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/techs`)
      .then(resp => resp.json())
      .then(stories => {
        dispatch({type: 'FETCH_SAVED_STORIES_SUCCESS', payload: stories})
      })
  }
}

export const addTechStorieToApi = (body) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/techs`,{
      method: 'POST',
      body: JSON.stringify({tech: body}),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(storie => dispatch({type: 'ADD_STORIE', payload: storie}))
  }
}
