import axios from "axios";
import React, { Component } from "react";
import { initDetailAction } from "../../redux/action";
import { connect } from "react-redux";
import HeaderNav from "../../components/Header";
import FooterNav from "../../components/Footer";

class Detail extends Component {
  componentDidMount() {
    this.findResult();
  }
  findResult = () => {
    //console.log(this.props);
    const { id } = this.props.match.params;
    axios
      .post("http://localhost:3300/goods/getDetail", { productId: id })
      .then((res) => {
        const data = res.data.result;
        //this.props.initGoodsList(data.list);
        //console.log(data.list);
        this.props.getDetail(data.list);
      });
  };
  render() {
    //console.log(this.props);
    const { productName, salePrice, productImage, productUrl } =
      this.props.detail;
    return (
      <div>
        {/* {this.props.detail.productId} */}
        <HeaderNav></HeaderNav>
        <img src={require("../../assets/img/" + productImage).default} alt="" />
        <ul>
          <li>{productName}</li>
          <li>{salePrice}</li>
          <li>{productImage}</li>
          <li>{productUrl}</li>
        </ul>
        <FooterNav></FooterNav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  detail: state.detail,
});
const mapDispatchToProps = (dispatch) => ({
  getDetail(detail) {
    dispatch(initDetailAction(detail));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
