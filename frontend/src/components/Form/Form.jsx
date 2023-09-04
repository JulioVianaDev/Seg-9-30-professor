import React, { useState } from 'react'
import "./Form.css"
function Form(props) {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const CadastrarNote = ()=>{
    props.createNote(title,description);
    props.fecharOModal();

  }
  return (
    <form onSubmit={CadastrarNote} className={"form"}>
      <h1>Adicionar Anotação</h1>
      <label htmlFor="title">Titulo</label>
      <input 
        type="text" 
        placeholder="Titulo da anotação" 
        name="title" 
        id="title"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        />
      <label htmlFor="description">Descrição</label>
      <input 
        value={description}
        type="text" 
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="Descrição da anotação" 
        name="description" 
        id="description"
      />
      <button>Cadastrar anotação</button>
    </form>
  )
}

export default Form