import React from 'react'
import {MdOutlinePushPin} from "react-icons/md"
import {MdCreate,MdDelete} from "react-icons/md"

function Notes({
    title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPineNote
}) {
  return (
    <div className='border rounded p-4 hover:shadow-lg transition-all ease-in-out'>
        <div className='flex items-center justify-between'>
            <div>
                <h6 className='text-sm font-medium'>{title}</h6>
                <span className='text-xs text-slate-500'>{date}</span>
            </div>
            <MdOutlinePushPin className={`text-xl cursor-pointer hover:text-blue-400 ${isPinned?'text-blue-400':'text-slate-400'}`} onClick={onPineNote}/>
        </div>
    <p className='text-xs text-slate-600 mt-2'>{content?.slice(0,60)}</p>
        <div className='flex items-center justify-between mt-2'>
            <div className='text-xs text-slate-500'>{tags}</div>
            <div className='flex items-center p-2'>
                <MdCreate className='text-slate-400 cursor-pointer hover:text-green-500'/>
                <MdDelete className='text-slate-400 cursor-pointer hover:text-red-500'/>
            </div>
        </div>
    </div>
  )
}

export default Notes
