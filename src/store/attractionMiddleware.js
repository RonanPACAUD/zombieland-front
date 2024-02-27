import { changeInputValue, resetAttractionState, updateAttractionList, updateSelectedAttraction } from './attractionSlice';

const attractionMiddleware = (store) => (next) => (action) => {
  const state = store.getState();


  if (action.type === 'GET_ALL_ATTRACTIONS') {
    fetch('http://localhost:3000/attraction')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateAttractionList(data));
      });
  }

  if (action.type === 'GET_ONE_ATTRACTION') {
    fetch(`http://localhost:3000/attraction/${action.payload}`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateSelectedAttraction(data));
      });
  }

  if (action.type === 'POST_NEW_ATTRACTION_TO_API') {

    fetch('http://localhost:3000/attraction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: state.attraction.settings.name,
        description: state.attraction.settings.description,
        category_id: state.attraction.settings.category_id,
      }),
    })
      .then((response) => 
      {if (response.status === 200) {
        store.dispatch(resetAttractionState())
      }
      return response.json()})
      .then((data) => {
        store.dispatch(changeInputValue(data));
        store.dispatch({ type: 'GET_ALL_ATTRACTIONS' });
      });
  }

  if (action.type === 'MODIFY_ATTRACTION_TO_API') {
    fetch(`http://localhost:3000/attraction/${action.payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: action.payload.name,
        description: action.payload.description,
        category_id: action.payload.category_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateSelectedAttraction(data));
        store.dispatch({ type: 'GET_ALL_ATTRACTIONS' });
      });
  }

  if (action.type === 'DELETE_ATTRACTION') {
    fetch(`http://localhost:3000/attraction/${action.payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then(() => {
        store.dispatch({ type: 'GET_ALL_ATTRACTIONS' });
      });
  }

  next(action);
};

export default attractionMiddleware;
