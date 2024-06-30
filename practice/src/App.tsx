import { countAtom } from "./Store/atoms/count"
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
      <RecoilRoot>
        <button onClick={IncrementCount}>Increment</button>
        <h2>{count}</h2>
        <button onClick={DecrementCount}>Decrement</button>
      </RecoilRoot>
    </>
  )
}

export default App

//useRecoilState - read and update the value
//useRecoilValue - only read the value
// main.tsx inside recoilroot to avoid errors
