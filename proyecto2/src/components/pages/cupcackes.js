import Cupcake from "../cards/Cupcake";
import {useEffect, useState} from "react";


/*
fetch API nos permite traer contenido de una API de manera facil
 el metodo fetch funciona como un get que obtiene una respuesta del servidor.
 Luego .then recibe una funcion y lo que va a hacer en primera instancia es convertir esta respuesta a formato json.
Por ultimo utilizo .then(data => ). Este data es un array con la informacion almacenada en la respuesta de la API (la base de datos de cupcakes).
Nota: esta bueno asegurarse con un consol.log para asegurarse que viene en mi API
 */
const Cupcackes = () => {
    const [cupcakes, setCupcakes] = useState()

     useEffect(() => {
         fetch("http://localhost:3000/cupcackes")
             .then(response => response.json())
             .then(data => setCupcakes(data)) //cupcakes (el estado) va a ser lo que venga en el dato. Ahi lo voy a poder ver en el componente
     }, [])

    return(
        <div className="ed-grid">
            <h1> Pagina de Cupcakes</h1>
            {
                cupcakes ? (
                    <section>
                        {
                            cupcakes.map(c => <Cupcake/>)
                        }
                    </section>
                ) : (<span>Cargando.....</span>)
            }

        </div>
    )
}
// uso .map y no forEach porque no quiero trabajar con el array original.
//hago que el array cupcakes se recorra con el .map y voy renderizando un cupcake con c/u de los elementos del array
//En un principio mi pagina esta esperando los datos para que se traigan. Hasta que terminen de cargar aparece vacia (y esta feo)

export default Cupcackes