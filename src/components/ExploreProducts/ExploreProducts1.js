import React, { useState, useEffect } from "react";
import Axios from "axios";

function ExploreProducts() {
  useEffect(() => {
    Axios.get("https://63189f2cf6b281877c71eab0.mockapi.io/products").then(
      (data) => {
        console.log("ExploreProducts data", data.data);
        //steSliderItems(data.data);
      }
    );
  }, []);
  return (
    <div className="exploreProducts">
      <h5>Explore Products</h5>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-6 border d-flex flex-column">
            <img />
            <div>Hint</div>
            <div>product price</div>
            <div>status</div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-6 border">sss</div>
          <div className="col-lg-3 col-sm-6 col-xs-6 border">sss</div>
          <div className="col-lg-3 col-sm-6 col-xs-6 border">sss</div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
