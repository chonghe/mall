import React, { Component } from "react";
import HeaderNav from "../../components/Header";
import FooterNav from "../../components/Footer";
import store from "../../redux/store";
import { initCartAction, addAction, subAction } from "../../redux/action";
import { connect } from "react-redux";

import "../../assets/css/checkout.css";
import "./index.css";
import axios from "axios";
import { DECREMENT_ITEM } from "../../redux/constant";

class Cart extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    const userId = "100000077";
    axios
      .get("http://localhost:3300/users/cartList", {
        params: { userId: userId },
      })
      .then((response) => {
        const res = response.data;
        this.props.initCart(res.result);
      });
  };
  delCart = (productId) => {
    const userId = "100000077";
    axios
      .post("http://localhost:3300/users/cartDel", {
        userId: userId,
        productId: productId,
      })
      .then((response) => {
        const res = response.res;
        console.log(res);
        // if (res.status == "0") {
        this.init();
        // }
      });
  };
  editCart = (flag, item) => {
    //const userId = "100000077";
    if (flag == "add") {
      item.productNum++;
      //console.log(item.productNum);
    } else {
      if (item.productNum <= 1) {
        return;
      }
      item.productNum--;
    }
    axios
      .post("http://localhost:3300/users/cartEdit", {
        //userId: userId,
        productId: item.productId,
        productNum: item.productNum,
      })
      .then((response) => {
        const res = response.data;
        this.init();
      });
  };
  totalPrice = () => {
    const money = 0;
    this.cartList.map((item) => {
      money += parseFloat(item.salePrice) * parseInt(item.productNum);
    });
    return money;
  };
  render() {
    return (
      <div>
        <HeaderNav></HeaderNav>
        <div className="nav-breadcrumb-wrap">
          <div className="container">
            <nav className="nav-breadcrumb">
              <a href="/">Home</a>
              <span>My Cart</span>
            </nav>
          </div>
        </div>

        <div className="container">
          <div className="cart">
            <div className="page-title-normal">
              <h2 className="page-title-h2">
                <span>My Cart</span>
              </h2>
            </div>
            <div className="item-list-wrap">
              <div className="cart-item">
                <div className="cart-item-head">
                  <ul>
                    <li>Items</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                    <li>Edit</li>
                  </ul>
                </div>
                <ul className="cart-item-list">
                  {this.props.cartList.map((item, index) => {
                    return (
                      <li key={item.productId}>
                        <div className="cart-tab-1">
                          {/* <div className="cart-item-check">
                            <a href="#" className="checkbox-btn item-check-btn">
                              <svg className="icon icon-ok">
                                <use xlinkHref="#icon-ok"></use>
                              </svg>
                            </a>
                          </div> */}
                          <div className="cart-item-pic">
                            <img
                              src={
                                require("../../assets/img/" + item.productImage)
                                  .default
                              }
                            />
                          </div>
                          <div className="cart-item-title">
                            <div className="item-name">{item.productName}</div>
                          </div>
                        </div>
                        <div className="cart-tab-2">
                          <div className="item-price">$ {item.salePrice}</div>
                        </div>
                        <div className="cart-tab-3">
                          <div className="item-quantity">
                            <div className="select-self select-self-open">
                              <div className="select-self-area">
                                <button
                                  className="input-sub"
                                  onClick={() => this.editCart("minu", item)}
                                >
                                  -
                                </button>
                                <span className="select-ipt">
                                  {item.productNum}
                                </span>
                                <button
                                  className="input-add"
                                  onClick={() => this.editCart("add", item)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-tab-4">
                          <div className="item-price-total">
                            $ {item.salePrice * item.productNum}
                          </div>
                        </div>
                        <div className="cart-tab-5">
                          <div className="cart-item-opration">
                            <button
                              className="item-edit-btn"
                              onClick={() => this.delCart(item.productId)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="cart-foot-wrap">
              <div className="cart-foot-inner">
                <div className="cart-foot-l">
                  {/* <div className="item-all-check">
                    <a href="javascipt:;" onClick={this.toggleCheckAll}>
                      <span
                        className={`checkbox-btn item-check-btn ${
                          this.state.checkAllFlag ? "check" : ""
                        }`}
                      >
                        <svg className="icon icon-ok">
                          <use xlinkHref="#icon-ok" />
                        </svg>
                      </span>
                      <span>Select all</span>
                    </a>
                  </div> */}
                </div>
                <div className="cart-foot-r">
                  <div className="item-total">
                    Item total: <span className="total-price"></span>
                  </div>
                  <div className="btn-wrap">
                    <a className="btn btn--red">Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterNav></FooterNav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartList,
  total: state.total,
});
const mapDispatchToProps = (dispatch) => ({
  initCart(cartList) {
    dispatch(initCartAction(cartList));
  },
  // incrementItem(productName, index) {
  //   dispatch(addAction(productName, index));
  // },
  // decrementItem(productName, index) {
  //   // if (productNum <= 1) {
  //   //   return;
  //   // }
  //   dispatch(subAction(productName, index));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
