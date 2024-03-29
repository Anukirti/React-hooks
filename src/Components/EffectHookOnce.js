import React, {useState, useEffect} from 'react'

export default function EffectHookOnce() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("useEffect - updating title")
        document.title = `You Clicked ${count} times`
    },[count])
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>  
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}
