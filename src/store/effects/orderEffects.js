import {call, put, takeLatest} from 'redux-saga/effects'
import { api, http } from '../../http';

export const SET_CONFIRM_STATUS = 'order/set_confirm_order_status';

const setConfirmOrderStatus = (status)=>({
  type: SET_CONFIRM_STATUS,
  status
})

const requestConfirmOrder = async (params)=>{
  const result = await http.post(api.CONFIRM_ORDER_API, params);
  return result;
}

function *fetchConfirmOrder({orders, pay}){
  yield put(setConfirmOrderStatus(1));
  yield call(requestConfirmOrder, {orders, pay});
  yield put(setConfirmOrderStatus(2));
}

function *confirmOrderEffect(){
  yield takeLatest('order/fetch_confirm_order', fetchConfirmOrder);
}

// 以下是获得订单全部数据的代码
export const SET_ORDER_DATA = 'order/set_order_data';

// 获得订单
const setOrderData = (data)=>({
  type: SET_ORDER_DATA,
  data
})

const requestOrderData = async ()=>{
  const result = await http.get(api.GET_ORDER_DATA_API);
  return result;
}

function *fetchOrderData(){
  const result = yield call(requestOrderData);
  yield put(setOrderData(result.data));
}

function *getOrderDataEffect(){
  yield takeLatest('order/get_order_data', fetchOrderData);
}

export default [
  confirmOrderEffect,
  getOrderDataEffect
  
]