

import {useState} from "react"

const Cupcake = ({sabor, color}) => {

//useState nos va a permitir utilizar el estado en los componentes funcionales.
//useState devuelve un array de dos elementos estado y funcion que actualiza el estado.Voy a almacenarlo en una variable (array). Por convecion el nombre de la funcion empieza con set.
//estado puede ser de cualquier tipo. (number, objeto etc)
//el useState recibe el valor por defecto de mi componente
    const [vendido,setVendido] = useState(false)

    //vender ahora va a ser una funcion
    const vender = () => {
        setVendido(true)
    }

    return(
        <div className="cupcake">
            <h2>{color}</h2>
            <p>{`Sabor:  ${sabor}`}</p>
            <p><b>Estado: </b>{vendido ? "Vendido": "A la venta"}</p>
            {
                !vendido && <button onClick={vender}>Vender</button>
            }
        </div>

    )
}

export default Cupcake

/**
useState en vez de recibir un objeto puede recibir cualquier tipo de dato.
 Por ejemplo un booleano.
 Si quiero recibir un objeto por ejemplo
 1) Si mi declaracion es: const [estado,setEstado] = useState({vendido: false})
 Para acceder a sus atributos hago:
 estado.vendido
 */