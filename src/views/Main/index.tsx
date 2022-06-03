import React, { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import ArticleItem from '@/components/Article/Item'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { RootStore } from '@/store/types'

import { MainStyle } from './styled'

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from './store/actionCreators'

function Main() {
  const navigate = useNavigate()
  const { count } = useSelector(
    (state: RootStore) => ({
      count: state.countStore.count
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  return (
    <MainStyle>
      <div className="list bg">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ArticleItem
            key={item}
            isLike
            onClick={() => navigate(`/article/${item}`)}
          />
        ))}
      </div>
      <div className="sidebar bg">
        侧边栏, 当前计数: {count} <br />
        <button onClick={() => dispatch(increment(2))}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        {/* <button onClick={() => dispatch(incrementAsync())}>异步+1</button>
        <button onClick={() => dispatch(decrementAsync())}>异步-1</button> */}
      </div>
    </MainStyle>
  )
}

export default memo(Main)
