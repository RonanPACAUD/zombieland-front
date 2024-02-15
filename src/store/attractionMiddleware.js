import { updateAttractionList } from "./attractionSlice";

const attractionMiddleware = (store) => (next) => (action) => {

    if (action.type === 'GET_ATTRACTIONS_FROM_API') {

        fetch('http://localhost:3000/attraction')
            .then((response) => response.json())
            .then((data) => {
                store.dispatch(updateAttractionList(data));
            })
    }
    next(action);
};

export default attractionMiddleware;