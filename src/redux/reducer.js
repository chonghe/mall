import {
  GET_GOODS_LIST,
  GET_CART_LIST,
  DELETE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  GET_DETAIL,
} from "./constant";
const initState = {
  goodsList: [],
  cartList: [],
  detail: {},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT_ITEM:
      return { ...state, counter: state.counter + action.num };
    case DECREMENT_ITEM:
      return { ...state, counter: state.counter - action.num };
    case GET_GOODS_LIST:
      return { ...state, goodsList: action.goodsList };
    case GET_CART_LIST:
      return { ...state, cartList: action.cartList };
    case GET_DETAIL:
      return { ...state, detail: action.detail };
    default:
      return state;
  }
}
