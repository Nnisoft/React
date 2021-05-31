import React from "react";

export default function OrderItem({ data }) {
  return (
    <>
    <div className="pay-top">
      <div className="order-item">
        <div className="img">
          <img src={data.get("goodsImg")} alt="" />
        </div>
        <div className="info">
          <div className="shopp-title">
            <h3>{data.get("goodsName")}</h3>
            <p className="handle">
            x{data.get("count")}
            </p>
          </div>
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
      <div className="serve">
        <div>服务</div>
        <div className="select-serve">
          <p>可选保障服务</p>
          <b>&gt;</b>
        </div>
      </div>
      <div className="delivery">
        <div>配送</div>
        <div className="del-right">
          <p>快递运输</p>
          <p>工作日、双休日均可送货</p>
        </div>
      </div>
      <div className="leave">
        <div>留言</div>
        <div>
          <input type="text" placeholder="建议留言前先与商家沟通确认"/>
        </div>
      </div>
    </div>
    <div className="pay-center">
      <div className="amount">
        <div>商品金额</div>
        <div>¥{data.get("retailPrice")}</div>
      </div>
      <div className="freight">
        <div>运费</div>
        <div>¥0.00</div>
      </div>
      <div className="discount">
        <div>优惠券</div>
        <div className="none-dis">
          <p>无可用</p>
          <b>&gt;</b>
        </div>
      </div>
      <div className="line"></div>
      <div className="total add-up">
        合计: <span>¥{data.get("retailPrice") * data.get("count")}</span>
      </div>
    </div>
    <div className="pay-bottom">
      <div className="invoice">
        <div>发票</div>
        <div>不开具发票</div>
      </div>
      <div className="payment">
        <div>支付方式</div>
        <div>在线支付</div>
      </div>
    </div>
    </>
  );
}
