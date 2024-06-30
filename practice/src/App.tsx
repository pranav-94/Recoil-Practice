import { countAtom, readValue } from "./Store/atoms/count"
import {useRecoilValue , useRecoilState , RecoilRoot} from 'recoil'

function App() {

const [count ,setCount] = useRecoilState(countAtom)

const IncrementCount =()=>{
  setCount(count+1)
}

const DecrementCount =()=>{
  setCount(count-1)
}

  return (
    <>
        <button onClick={IncrementCount}>Increment</button>
        <h2>{count}</h2>
        <button onClick={DecrementCount}>Decrement</button>
        <PracticeuseRecoilValue/>
    </>
  )
}

const PracticeuseRecoilValue = ()=>{
  const readVal = useRecoilValue(readValue)
  return(
    <>
       <h3>{readVal}</h3>
    </>
  )
}

export default App

//useRecoilState - read and update the value
//useRecoilValue - only read the value
// main.tsx inside recoilroot to avoid errors
