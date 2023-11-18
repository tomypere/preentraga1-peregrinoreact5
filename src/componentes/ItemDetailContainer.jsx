import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import brand1 from '../assets/ryzen75.jpeg'
import brand2 from '../assets/ryzen55.jpeg'
import brand3 from '../assets/lili.jpeg'
import brand4 from '../assets/ryzen572.jpeg'
import brand5 from '../assets/3060.jpeg'
import brand6 from '../assets/4090.jpeg'
import brand7 from '../assets/1060.jpg'
import brand8 from '../assets/2080ti.jpg'
import brand9 from '../assets/b550.jpeg'
import brand10 from '../assets/b450.jpeg'
import brand11 from '../assets/ramcorsa1.jpeg'
import brand12 from '../assets/corsair.jpeg'



const ItemDetailContainer = () => {

    const [productos, setProductos] = useState ([])
    const { id } = useParams()
    const products = [
        {id: 1, nombre: "Ryzen 7 5700x", description: "Procesador gama media", stock: 20, category: "Procesador", image: brand1},
        {id: 2, nombre: "Ryzen 5 5600x", description: "Procesador gama baja", stock: 5, category: "Procesador", image: brand2},
        {id: 3, nombre: "Ryzen 9 7950x3d", description: "Procesador gama alta", stock: 40, category: "Procesador", image: brand3},
        {id: 4, nombre: "Ryzen 5 7600x", description: "Procesador gama media", stock: 30 , category: "Procesador", image: brand4},
        {id: 5, nombre: "Rtx 3060", description: "Placa de video gama media", stock: 22 , category: "Placa-de-video", image: brand5},
        {id: 6, nombre: "Rtx 4090", description: "Placa de video gama alta", stock: 50 , category: "Placa-de-video", image: brand6},
        {id: 7, nombre: "Gtx 1060", description: "Placa de video gama baja", stock: 100, category: "Placa-de-video", image: brand7},
        {id: 8, nombre: "Rtx 2080 ti", description: "Placa de video gama media", stock: 10, category: "Placa-de-video", image: brand8},
        {id: 9, nombre: "B550 F GAMING", description: "Mother gama media", stock: 60, category: "Motherboard", image: brand9},
        {id: 10, nombre: "B450", description: "Mother gama baja", stock: 15, category: "Motherboard", image: brand10},
        {id: 11, nombre: "Corsair ddr4 3600mhz", description: "RAM gama media", stock: 20, category: "Ram", image: brand11},
        {id: 12, nombre: "Corsair ddr5 5200mhz", description: "RAM gama alta", stock: 40, category: "Ram", image: brand12},
    ]

    useEffect(() => {
        const getProductos = new Promise((resolve, reject) => {
            if (products.length > 0) {
                setTimeout(() => {
                    resolve("Hay datos", setProductos(products))
                }, 2000)
            }else{
                reject(new Error("No hay datos"))
            }
        })
        getProductos
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id])
    console.log(productos)
    
    const filteredProducts = id ? productos.filter((producto) => producto.id === parseInt(id)) : productos;




    return (
        <>
            <ItemDetail
            productos = {filteredProducts}
            />
        </>
    )
}

export default ItemDetailContainer