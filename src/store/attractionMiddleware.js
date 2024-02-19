import { updateAttractionList, updateSelectedAttraction } from './attractionSlice';

const attractionMiddleware = (store) => (next) => (action) => {

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

  if (action.type === 'MODIFY_ATTRACTION_TO_API') {
    fetch(`http://localhost:3000/attraction/${action.payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: action.payload.name,
        description: action.payload.description,
        category_id: action.payload.category_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        store.dispatch(updateSelectedAttraction(data));
      });
  }

  next(action);
};

export default attractionMiddleware;
