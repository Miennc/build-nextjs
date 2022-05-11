import { combineReducers } from "redux";

import productReducer from "./product";
import categoryReducer from "./category";
import slideReducer from "./slide";
import articleReducer from "./article";
const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  slide: slideReducer,
  article : articleReducer,
  productDetails:productReducer
});

export default rootReducer;
