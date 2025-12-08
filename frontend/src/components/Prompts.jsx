import React from 'react'

export const Prompts = ({ text, number }) => {
  return (
    <div className='w-[93%] m-auto font-mono p-3 text-[12px] mb-1 rounded-sm border-slate-700/40   h-fit  text-slate-300 font-extralight border-b '>
      <div className='text-emerald-500 my-2 text-[13px] font-bold'>Prompt : {number}</div>
      <div>{text}</div>
    </div>
  )
}
