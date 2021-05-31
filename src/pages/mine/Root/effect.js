import {call, put, takeLatest} from 'redux-saga/effects'
import { api, http } from '../../http';

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
  getOrderDataEffect,
]