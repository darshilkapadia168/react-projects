import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  return (
    <div id='right' className='h-full p-4 w-2/3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
        {props.users.map(function(elem,idx){
          return <div key={idx}>
            <RightCard image={elem.img} tag={elem.tag} id={idx} color={elem.color}/>
          </div>
        })}
    </div>
  )
}

export default RightContent