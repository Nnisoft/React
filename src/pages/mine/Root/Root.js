import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppScroll from "../../../components/app-scroll";
import { renderRoutes } from "../../../utils/renderRoutes";
import "./style.scss"

const orderMenu = [
  { title: "全部订单", status: -1 },
  { title: "待付款", status: 0 },
  { title: "待发货", status: 1 },
  { title: "待收货", status: 2 },
  { title: "待评价", status: 3 },
];

export default function Root({ route }) {
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state) => state.getIn(["login", "loginStatus"]) === 2
  );
  let orderData = useSelector((state) => state.getIn(["order"]));
  // 请求订单的数据
  useEffect(() => {
    if(isLogin){
      dispatch({ type: "order/get_order_data" });
    }
  }, [dispatch, isLogin]);

  // 获得订单数据
  orderData = JSON.stringify(orderData)
  sessionStorage.setItem("allOrder",orderData)

  return (
    <>
      {/* 根页面 */}
      <div className="page" id="mine-root">
        <header className="header">
          <h1>我的</h1>
        </header>
        {isLogin ? (
          <AppScroll className="content">
            <div className="gife">
              <p>
                <span>¥0</span>
                <span>余额</span>
              </p>
              <p>
                <span>0</span>
                <span>优惠券</span>
              </p>
              <p>
                <span>0</span>
                <span>红包</span>
              </p>
              <p>
                <span>0</span>
                <span>积分</span>
              </p>
              <p>
                <span>0</span>
                <span>礼品卡</span>
              </p> 
            </div>
            <ul className="orders">
              {orderMenu.map((item) => (
                <li key={item.status}>
                  <Link className="title" to={{ pathname: `/mine/order_list/${item.status}`,state: {title: item.title} }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </AppScroll>
        ) : (
          <div className="to-login">
            <Link to="/login" className="go-mumo">欢迎使用简易，请先登录！</Link>
          </div>
        )}
      </div>
      {/* 子页面 */}
      {renderRoutes(route.routes)}
    </>
  );
}
