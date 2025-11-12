import React, { useState } from 'react'

function App() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

const submithandler = (evt)=>{
  evt.preventDefault()

  const copyTask = [...task];
  copyTask.push({title,details})
   
  setTask(copyTask)
  

  setTitle('')
  setDetails('')
  
}


const deletenote = (idx)=>{
  const copyTask = [...task];

  copyTask.splice(idx,1)

  setTask(copyTask)
}


  return (
    <div className="bg-black text-white h-screen lg:flex">
      <form onSubmit={(evt)=>{submithandler(evt)}} className="flex flex-col items-start lg:w-1/2 gap-6 p-10">
      <h1 className='text-4xl font-bold mb-5'>Add Notes</h1>
          <input
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="px-5 py-2 w-full font-medium text-lg rounded-md border border-zinc-500 bg-transparent outline-none"
            type="text"
            placeholder="Enter Notes Heading"
          />

          <textarea
            value={details}
            onChange={(e)=>{setDetails(e.target.value)}}
            className="px-5 py-2 h-25 font-medium w-full text-lg rounded-md border border-zinc-500 bg-transparent outline-none"
            type="text"
            placeholder="Write Details Here..."
          />

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium text-lg rounded-md transition-all duration-300 px-5 py-2 w-full"
          >
            Add Note
          </button>
          
      </form>
      <div className='lg:w-1/2 bg-black p-10 lg:border-l-2'>
        <h1 className='text-4xl font-bold mb-5'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-full overflow-auto'>
          {task.map(function(dets,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-56 w-44 rounded-2xl text-black pt-9 pb-2 px-4 py-10 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='font-bold leading-tight text-2xl'>{dets.title}</h3>
                <p className='leading-tight mt-3 font-medium text-gray-500'>{dets.details}</p>
              </div>
              <button onClick={()=>{
                deletenote(idx)
              }} className='w-full bg-red-600 text-white rounded-md font-medium cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
