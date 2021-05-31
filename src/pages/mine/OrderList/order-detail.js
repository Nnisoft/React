import React from "react";

export default function OrderDetail({ data }) {
  return (
    <>
      <div className="cart-item-wrap">
        <div className="cart-item">
          <div></div>
          <div className="img">
            <img src={data.get("goodsImg")} alt="" />
          </div>
          <div className="info">
            <h3>{data.get("goodsName")}</h3>
            <ul className="selected-arr">
              {data.get("selected").map((item) => (
                <li key={item.get("id")}>{item.get("value")}</li>
              ))}
            </ul>
            <p className="price">
              <span>¥{data.get("retailPrice")}</span>
              <span>¥{data.get("counterPrice")}</span>
            </p>
    
          </div>
        </div>
            
      </div>
    </>
  );
}