import { updateCategoryList } from "./categorySlice";

const categoryMiddleware = (store) => (next) => (action) => {

    if (action.type === 'GET_ALL_CATEGORIES') {
      fetch('http://localhost:3000/category')
        .then((response) => response.json())
        .then((data) => {
          store.dispatch(updateCategoryList(data));
        });
    }
  
    // if (action.type === 'GET_ONE_ATTRACTION') {
    //   fetch(`http://localhost:3000/attraction/${action.payload}`)
    //     .then((response) => response.json())
    //     .then((data) => {
  
    //       store.dispatch(updateSelectedAttraction(data));
    //     });
    // }
    next(action);
  };
  
  export default categoryMiddleware;