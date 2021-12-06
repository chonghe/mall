import React, { Component } from "react";
import HeaderNav from "../../components/Header";
import FooterNav from "../../components/Footer";
import axios from "axios";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import store from "../../redux/store";
import { initListAction } from "../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//css
import "../../assets/css/base.css";
import "../../assets/css/product.css";

class GoodsList extends Component {
  componentDidMount() {
    axios.get("http://localhost:3300/goods").then((res) => {
      const data = res.data.result;
      this.props.initGoodsList(data.list);
    });
  }

  addCart = (productId) => {
    const userId = "100000077";
    axios
      .post("http://localhost:3300/goods/addCart", {
        userId: userId,
        productId: productId,
      })
      .then((res) => {
        var res = res.data;
        if (res.status == 0) {
          alert("success");
        } else {
          alert("msg" + res.msg);
        }
      });
  };
  render() {
    return (
      <div>
        <HeaderNav />
        <div className="nav-breadcrumb-wrap">
          <div className="container">
            <nav className="nav-breadcrumb">
              <a href="/">Home</a>
              <span>Goods</span>
            </nav>
          </div>
        </div>
        <div className="accessory-result-page accessory-page">
          <div className="container">
            <div className="filter-nav">
              {/* <button onClick={this.sortGoods} className="sortby">
                Sort by:price {this.props.sortFlag ? "↑" : "↓"}
              </button> */}
              {/* <a href="javascript:void(0)" className="default cur">
                Default
              </a>
              <a href="javascript:void(0)" className="price">
                Price{" "}
                <svg className="icon icon-arrow-short">
                  <use xlinkHref="#icon-arrow-short"></use>
                </svg>
              </a> */}
              {/* <a href="javascript:void(0)" className="filterby stopPop">
                Filter by
              </a> */}
            </div>
            <div className="accessory-result">
              <div className="accessory-list-wrap">
                <div className="accessory-list col-4">
                  <ul>
                    {this.props.goodsList.map((item) => {
                      return (
                        <li key={item.productId}>
                          <Link to={`/detail/${item.productId}`}>
                            <div className="pic">
                              <a href="#">
                                <img
                                  src={
                                    require("../../assets/img/" +
                                      item.productImage).default
                                  }
                                  alt=""
                                />
                              </a>
                            </div>
                          </Link>
                          <div className="main">
                            <div className="name">{item.productName}</div>
                            <div className="price">$ {item.salePrice}</div>
                            <div className="btn-area">
                              <button
                                className="btn btn--m"
                                onClick={() => this.addCart(item.productId)}
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <Pagination
              style={{ textAlign: "right" }}
              defaultCurrent="1"
              defaultPageSize="8"
              total={50}
            />
          </div>
        </div>
        <FooterNav />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goodsList: state.goodsList,
  sortFlag: true,
  page: 1,
  pageSize: 8,
});
const mapDispatchToProps = (dispatch) => ({
  initGoodsList(goodsList) {
    dispatch(initListAction(goodsList));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
