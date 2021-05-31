import React from 'react'
import OrderDetail from "./order-detail"

export default function OrderList({location}) {
  const title = location.state.title;
  const orders = JSON.parse(sessionStorage.getItem("allOrder"));
  console.log(orders)
  return (
    <div className="page subpage" id="order_list">
        <h1>{title}</h1>
        <div>
          {/* {orders.forEach((item, index) => (
            <OrderDetail key={index} data={item.orders} />
          ))} */}
        </div>
    </div>
  )
}
