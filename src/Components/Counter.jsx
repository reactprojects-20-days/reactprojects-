import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setcount]=useState(1);

  return (
    <div>

        <button onClick={()=>setcount(count+1)}>Click Me{count}</button>
        <button onClick={()=> setcount(count-1)}>decrease</button>
    </div>
  )
}

export default Counter