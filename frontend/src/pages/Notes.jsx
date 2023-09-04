import React from 'react'
import AddNewButton from '../components/UI/AddNewButton'
import Modal from '../components/Modal/Modal'
import { useState } from 'react'

function Notes() {
  const [showModal,setShowModal] = useState(false)

  const mudarModal= ()=>{
    setShowModal((state)=>!state)
  }
  // function fecharOModal(){
  //   setShowModal(false)
  // }
  // function abrirOModal(){
  //   setShowModal(true)
  // }
  return (
    <div>
      <AddNewButton abrirOModal={mudarModal}/>
      {
        showModal ? <Modal fecharOModal={mudarModal}/> : null
      }
    </div>
  )
}

export default Notes