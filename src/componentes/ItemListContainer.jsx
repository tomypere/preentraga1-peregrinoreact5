import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {

  const productos = [
    {id: 1, titulo: "Producto A", descricpion: "descripcion del productoA", precio: 1000, categoria: "A"},
    {id: 2, titulo: "Producto B", descricpion: "descripcion del productoB", precio: 1500, categoria: "B"},
    {id: 3, titulo: "Producto C", descricpion: "descripcion del productoC", precio: 2000, categoria: "C"},
    {id: 4, titulo: "Producto D", descricpion: "descripcion del productoD", precio: 2500, categoria: "D"},
  ]
 
  const mostrarProductos = new Promise((resolve, reject)=>{
    if(productos.length> 0){
      setTimeout(()=> {
        resolve(productos)
      }, 5000)
    } else{
      reject("No se encontraron productos")
    }
  })

  mostrarProductos
  .then((resultado)=>{
    console.log(resultado)
  })

  .catch((error)=>{
    console.log(error)
  })

  return (
    <div>
       {
        productos.map((p)=>{
          return(
            <div key={p.id}>
            <h2>Producto: {p.titulo}</h2>
            <h4>{p.precio}</h4>
            </div>
          )
        })
      }
       {/*  <ItemCount/> */}
    </div>
  )
}

export default ItemListContainer