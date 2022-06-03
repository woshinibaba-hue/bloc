import { legacy_createStore as createStore, applyMiddleware } from 'redux'

// 引入 thunk 中间件， 作用是可以使用函数式的 action，用于异步请求
import thunk from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch

export default store
