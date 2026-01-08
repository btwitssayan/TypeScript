import {useState} from 'react'

function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
    <div>Counter</div>
    <div>Current count: {count}</div>
    <button onClick={() => setCount(count + 1)}>
        Order one more
    </button>
    </>
  )
}

export default Counter