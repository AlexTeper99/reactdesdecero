import Cupcake from "../cards/Cupcake";
import {useEffect, useState} from "react";



const Cupcackes = () => {
    const [cupcakes, setCupcakes] = useState()

    // useEffect(() => , [])

    return(
        <div className="ed-grid">
            <h1> Pagina de Cupcakes</h1>
            <section>
                <Cupcake />
            </section>
        </div>
    )
}



export default Cupcackes