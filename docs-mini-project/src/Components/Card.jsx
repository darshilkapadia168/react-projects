import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} dragElastic={0.2} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className='relative flex-shrink-0 w-32 h-40 bg-zinc-900/90 rounded-[20px] text-white overflow-hidden p-3'>
            <i className="ri-file-text-line"></i>
            <p className='text-[.55rem] mt-2 font-light tracking-tight leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex justify-between items-center px-3 py-2'>
                    <h5 className='text-[.6rem]'>{data.filesize}</h5>
                    <span className='text-xs'>
                        {data.close ? <i class="ri-close-fill"></i> : <i className="ri-arrow-down-circle-line"></i>}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                    <div className={`tag w-full py-[.5rem] ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-[.5rem] font-semibold text-white'>{data.tag.tagTitle}</h3>
                    </div>
                )
                }
            </div>
        </motion.div>
    
    </>
  )
}

export default Card