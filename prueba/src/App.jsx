import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const items_list=[]
  const[items, setItems]=useState(items_list);
  const [inputValue, setInputValue]= useState("")

  const handleSubmit=(e)=>{
    const newItem={
      id: crypto.randomUUID(), //da un id ramdom por medio de la funcion
      text: inputValue 
    }

    setItems((prevItems)=> [...prevItems, newItem]);
    setInputValue("");
  }

  return (

    <>
      <main>
        <section>
          <form action="">
            <input name='Item' required placeholder='llename' type="text" value={inputValue} 
            onChange={(e)=>setInputValue(e.target.value)} // encapsula la info del input
            />

            <button type='submit'>enviar</button>
          </form>
        </section>
          <h2>Lista de elementos</h2>
          <ul>
            {items.length===0 ?(
              <p>No hay items</p>
            ): (
              items,map((item)=>
              <li key={item.id}>
                {item.text}
                <button onClick={()=> handleDelete(item.id)}>
                eliminar
                </button>
              </li>
              )
            )
          
            }
          </ul>
        <section>

        </section>
      </main>
    </>
  )
}

export default App
