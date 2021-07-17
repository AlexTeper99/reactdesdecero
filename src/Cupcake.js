import {Component} from "react";

class Cupcacke extends Component{
    constructor(props) {
        super(props)
        this.state = {
            vendido: false
        }
        //estamos creando un estado para nuestro componente. Este estado inicial es un objeto que puede contener todos los valores que yo quiera
    }
    //render se encarga de retornar los valores.
    render(){

        return(
            <div className="cupcake">
              <h2>{this.props.color}</h2>
              <p>{`Sabor:  ${this.props.sabor}`}</p>
              <p><b>Estado: </b>{this.state.vendido ? "Vendido": "A la venta"}</p>
                {
                    !this.state.vendido && <button>vender</button>
                }
            </div>

        )
    }
}

/**
 * Renderizado condicional: Que solo aparezcan elementos en pantalla mediante condiciones.
   Si no esta vendido && pongo el boton vender

 */


export default Cupcacke
