import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notes from '../../components/Notes/Notes'
import {MdAdd} from 'react-icons/md'
import AddNote from './AddNote'
import Modal from "react-modal"


export default function Home() {
  const [openAddModal,setAddModal]=useState({
    isShow: false,
    type:"add",
    data:null

  });
  return (
    <>
      <Navbar/>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8 ml-8'>
          <Notes
          title="title11"
          date="3rd april 2014" 
          content="meeting on 3rd april casablanca anfa"
          tags="#Meeting"
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPineNote={()=>{}}/>
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-800 absolute right-10 bottom-10'
      onClick={()=>{
        setAddModal({isShow:true,type:'add',data:null});
      }}
      >
          <MdAdd className='text-[32px] text-white '/>
      </button>

      <Modal 
        isOpen={openAddModal.isShow}
        onRequestClose={()=>{}}
        style={{
          overlay:{
            backgroundColor:"rgba(0,0,0,0.2)"
          }
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
      >
        <AddNote
         onClose={()=>{setAddModal({isShow:false,type:"add",data:null});}}
         type={openAddModal.type}
         noteDta={openAddModal.data}
         />
      </Modal>

      
      
    </>
  )
}
