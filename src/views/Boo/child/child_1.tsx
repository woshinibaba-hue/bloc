import React from 'react'

import { useParams } from 'react-router-dom'

function Child_1() {
  const { id } = useParams()

  return <div>child_1 传递的id为：{id}</div>
}

export default Child_1
