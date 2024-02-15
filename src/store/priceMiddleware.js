import { updatePriceList } from "./priceSlice";

const priceMiddleware = (store) => (next) => (action) => {

    if (action.type === 'GET_PRICES_FROM_API') {

        fetch('http://localhost:3000/price')
            .then((response) => response.json())
            .then((data) => {
                store.dispatch(updatePriceList(data));
            })
    }

    next(action);
};

export default priceMiddleware;