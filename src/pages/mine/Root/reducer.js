import {fromJS} from 'immutable'
import {SET_ORDER_DATA} from './effect'

const initialState = fromJS([])

export default (state = initialState, action)=>{
  switch (action.type) {
    case SET_ORDER_DATA:
      return fromJS(action.data);
    default:
      return state;
  }
}