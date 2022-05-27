import React, { useState } from 'react'

import A from './child/A'
import B from './child/B'

function main() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      Hello World 当前计数：{count}
      <button type="button" onClick={handleClick}>
        +1
      </button>
      <A />
      <B />
    </div>
  )
}

export default main
