import React from 'react'
import { ArrowRight } from 'lucide-react'

function RightCardContent(props) {

  console.log(props.color);
  
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center'>{props.id+1}</h2>
        <div>
          <p className='text-xl leading-relaxed mb-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam nostrum, non modi velit voluptate?</p>
          <div className='flex items-center justify-between'>
            <button style={{backgroundColor:props.color}} className='text-white px-8 py-2 font-medium rounded-full'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='text-white px-4 py-2 font-medium rounded-full'><ArrowRight /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent