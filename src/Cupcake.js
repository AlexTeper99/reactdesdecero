import {useState, useEffect} from "react"
import "./Cupcake.css"

const Cupcake = ({sabor, color}) => {

    //creo dos estados.
    const [vendido,setVendido] = useState(false)
    const [reservado,setReservado] = useState(false)

    //vender ahora va a ser una funcion
    const vender = () => {
        setVendido(true)
        setReservado(true)
    }

    const reservar = () => {
        setReservado(true)
    }

    //param1: Una funcion que se va a ejecutar cada vez que mi componente se va a montar/actualizar.
    //param2 OPCIONAL: Un array que recibe los valores del estado que pueden ir cambiando. Esta funcion se va a volver a ejecutar cada vez que cambia el valor que esta dentro del array.
    //Si quiero que se ejecute solo 1 vez doy el array vacio, si quiero que cualquier cambio de estado llame a la funcion saco el array y si quiero que observe y se llame con un cambio de un valor en particular lo pongo en el array
    useEffect(()=>{
        console.log('Estamos por iniciar el componente', Date.now())
    }, [vendido])


    return(
        <div className="cupcake">
          //  <img src={} alt ={sabor}/>
            <h2>{color}</h2>
            <p>{`Sabor:  ${sabor}`}</p>

            <p><b>Estado: </b>{reservado ? "Reservado": "Libre"}</p>
            {
                !reservado && <button onClick={reservar}>Reservar</button>
            }

            <p><b>Estado: </b>{vendido ? "Vendido": "A la venta"}</p>
            {
                !vendido && <button onClick={vender}>Vender</button>
            }
        </div>

    )
}

export default Cupcake

/**
    Hook useRef
    Nos permite hacer una referencia. En react al trabajar con un dom virtual
    las referencias nos permiten atrapar un elemento del DOM virtual y manipularlo
    como si fuera en el DOM real.
 */