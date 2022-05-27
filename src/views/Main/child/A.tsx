import React, { memo } from 'react'

function A() {
  console.log('A 被重新渲染了')

  return <div>A</div>
}

// 使用memo来包裹当前组件，可以避免当父组件状态改变时，频繁渲染子组件，从而提高性能，但是会导致子组件的状态改变时，父组件也会被重新渲染
// 参考：https://reactjs.org/docs/hooks-reference.html#usememo
export default memo(A)
