// 导入 combineReducers 用于合并多个 reducer 函数
import { combineReducers } from 'redux'

import CountReducer from '@/views/Main/store'
import LayoutReducer from '@/layout/store'

const reducer = combineReducers({
  countStore: CountReducer,
  layoutStore: LayoutReducer
})

export default reducer
