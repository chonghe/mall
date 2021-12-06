import {
  GET_GOODS_LIST,
  GET_CART_LIST,
  DELETE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  GET_DETAIL,
} from "./constant";
import axios from "axios";

export const addAction = (productNum, index) => ({
  type: INCREMENT_ITEM,
  index,
  productNum: productNum + 1,
});

export const subAction = (index) => ({
  type: DECREMENT_ITEM,
  index,
});

export const initListAction = (goodsList) => ({
  type: GET_GOODS_LIST,
  goodsList,
});

export const initDetailAction = (detail) => ({
  type: GET_DETAIL,
  detail,
});

// export const getGoodsListAction = () => {
//   return (dispatch) => {
//     axios.get("http://localhost:3300/goods").then((res) => {
//       const data = res.data.result.list;
//       dispatch(initListAction(data));
//     });
//   };
// };

export const initCartAction = (cartList) => ({
  type: GET_CART_LIST,
  cartList,
});
