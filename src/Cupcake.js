import {useState, useEffect, useRef} from "react"
import "./Cupcake.css"

const Cupcake = ({foto, sabor, color}) => {

    const [vendido,setVendido] = useState(false)
    const [reservado,setReservado] = useState(false)

    //digo que esto va a ser una referencia
    const fotoCupcake = useRef()

    const vender = () => {
        setVendido(true)
        setReservado(true)
    }

    const reservar = () => {
        setReservado(true)
    }

    //tome al elemento del DOM real al que hacia referencia
    useEffect(()=>{
        const elemento = fotoCupcake.current
        console.log(elemento)
    }, [reservado])


    return(
        <div className="cupcake">
            <img ref={fotoCupcake} src={foto} alt ={sabor} className="vendido"/>
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