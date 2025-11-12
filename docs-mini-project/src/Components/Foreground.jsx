import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);

const data = [
  {
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    filesize: "0.9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Dowload Now", tagColor: "green"},
  },
  {
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    filesize: "0.9mb",
    close: false,
    tag: {isOpen: false, tagTitle: "Dowload Now", tagColor: "blue"},
  },
  {
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    filesize: "0.9mb",
    close: true,
    tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"},
  },
];

  return (
    <>
        <div ref={ref} className='w-full h-full top-0 left-0 fixed z-[3] flex gap-5 flex-wrap p-5'>
           {data.map((item,idx)=>(
            <Card data={item} reference={ref} />
           ))}
        </div>
    </>
  )
}

export default Foreground