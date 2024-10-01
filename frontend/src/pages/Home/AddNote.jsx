import React, { useState } from 'react'
import {MdAdd,MdClose} from 'react-icons/md'

export default function AddNote({noteDta,type,onClose}) {

  const [title,setTitle] = useState("");

  const [content,setContent] = useState("");

  const [tags,setTags] = useState([]);

  const [inputValue,setInputValue] = useState("");

  const [error,setError] = useState("");

  const handlechangevalue = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if(inputValue.trim() !== ""){
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
      
    }
  };

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      addNewTag();
      
    }
  };

  const handleRemoveTag = (removetag) => {
    setTags(tags.filter((tag) => tag !== removetag));
  };

  const addNote = async () => {

  }

  const editNote = async () => {

  }

  const handleAddNote = () => {
    if(!title){
      setError("Please enter the title")
      return;
    }

    if(!content){
      setError("Please enter the content")
      return;
    }
    setError('');

    if(type === 'edit'){
      editNote()
    }else{
      addNote()
    }
  };

  return (
    <div className='relative'>
      <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
        <MdClose className='text-xl text-slate-400'/>
      </button>

      <div className='flex flex-col gap-2'>
            <label className='text-xs text-slate-400'>TITLE</label>
            <input type="text"
                className='text-2xl text-slate-950 outline-none'
                placeholder='go to gym at 4'
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
             />
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        <label className='text-xs text-slate-400'>CONTENT</label>
        <textarea 
            type='text' 
            className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
            placeholder='content'
            rows={10}
            value={content}
            onChange={(e)=>setContent(e.target.value)}
        />
      </div>
      <div className='mt-3'>
        <label className='text-xs text-slate-400'>TAGS</label>
        {tags?.length > 0 && (
          <div className='flex items-center gap-2 flex-wrap mt-2'>
          {tags.map((tag,index) => (
            <span key={index} className='flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-2 py-1 rounded'>
              # {tag}
              <button onClick={() => {handleRemoveTag(tag);}}>
                <MdClose />
              </button>

            </span>
          ))}
        </div>
      )}
        <div className='flex items-center gap-4 mt-3'>
            <input type="text" 
            placeholder='Add tags'
            className='text-sm bg-transparen border px-3 py-2 rounded outline-none'
            value={inputValue}
            onChange={handlechangevalue}
            onKeyDown={handleKeyDown}
            />

            <button onClick={() => {addNewTag();}}>
                <MdAdd className="text-2xl text-blue-600"/>
            </button>
        </div>
        
      </div>

      {error && <p className='text-red-600 text-xs pt-4'>{error}</p>}

      <button className='w-full bg-blue-600 text-white rounded my-1 hover:bg-blue-700 font-medium mt-5 p-3' onClick={handleAddNote}>
        ADD
      </button>
    </div>
  )
}
