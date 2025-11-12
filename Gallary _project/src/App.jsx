import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

function App() {

  const [UserData, setUserData] = useState([]);
  const [Index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  }, [Index])

  let printUserData = <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if(UserData.length > 0){
    printUserData = UserData.map(function(elem ,idx){

      return <div className='p-2' key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='h-[80%] flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-4'>
        <button  style={{ opacity: Index == 1 ? 0.6 : 1 }}
         onClick={()=>{
          if(Index>1){
            setIndex(Index-1)
            setUserData([])
          }
        }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <h4>Page {Index}</h4>
        <button onClick={()=>{
          setUserData([])
          setIndex(Index+1)
        }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>

    </div>
  )
}

export default App