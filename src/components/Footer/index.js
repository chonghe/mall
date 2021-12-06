import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__wrap">
          <div className="footer__secondary">
            <div className="footer__inner">
              <div className="footer__region">
                <span>Region</span>
                <select className="footer__region__select">
                  <option value="en-US">USA</option>
                  <option value="zh-CN">China</option>
                </select>
              </div>
              <div className="footer__secondary__nav">
                <span>Copyright © 2021 Walmart All Rights Reserved.</span>
                <a href="http://us.lemall.com/us/aboutUs.html">About Us</a>
                <a href="http://us.lemall.com/us/termsofUse.html">
                  Terms &amp; Conditions
                </a>
                <a href="http://us.lemall.com/us/privacyPolicy.html">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
