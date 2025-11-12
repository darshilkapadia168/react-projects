import React from 'react'

const Background = () => {
  return (
    <>
        <div className='w-full h-screen fixed z-[2]'>
            <div className='absolute top-[5%] w-full py-5 flex justify-center text-xs leading-none tracking-tight text-zinc-600'>Documents.</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tight text-zinc-900'>Docs.</h1>
        </div>
    </>
  )
}

export default Background