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
         fetch(`${process.env.REACT_APP_URL_API}cupcakes`)
             .then(response => response.json())
             .then(data => setCupcakes(data)) //cupcakes (el estado) va a ser lo que venga en el dato. Ahi lo voy a poder ver en el componente
     }, [])

    return(
        <div className="ed-grid">
            <h1> Pagina de Cupcakes</h1>
            {
                cupcakes ? (

                    <section  className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            cupcakes.map(({
                                       descripcion,
                                       imagen,
                                       sabor,
                                       color,
                                       precio,
                                        id
                            }) => (
                                <Cupcake
                                    key={id}
                                    imagen={imagen}
                                    descripcion={descripcion}
                                    sabor={sabor}
                                    color={color}
                                    precio={precio}

                                />
                            ))
                        }
                    </section>
                ) : (<span>Cargando.....</span>)
            }

        </div>
    )
}
/*
Las variables de entorno permiten usar valores que van a cambiar
dependiendo del entorno en donde te encuentres.

 */

export default Cupcackes