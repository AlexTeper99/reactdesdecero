import {Component} from "react";

class Cupcacke extends Component{
    constructor(props) {
        super(props)
        this.state = {
            vendido: false
        }
        this.vender = this.vender.bind(this)
    }

    vender(){
        this.setState({vendido : true})
    }
    //tengo que aplicar el metodo al presionar el boton. Para eso utilizo el atributo onClick
    render(){
        return(
            <div className="cupcake">
              <h2>{this.props.color}</h2>
              <p>{`Sabor:  ${this.props.sabor}`}</p>
              <p><b>Estado: </b>{this.state.vendido ? "Vendido": "A la venta"}</p>
                {
                    !this.state.vendido && <button onClick={this.vender}>vender</button>
                }
            </div>

        )
    }
}

/**
 * setState tiene que estar bindeado desde mi metodo.
 * Siempre que cree mis propios metodos debo hacer eso para que funcionen.
 */
//importante: llamar al meotodo sin parentesis porque sino se ejecutaria automaticamente al leer esa linea de codigo y no al hacer click sobre el.
/**
 * Renderizado condicional: Que solo aparezcan elementos en pantalla mediante condiciones.
   Si no esta vendido && pongo el boton vender

 */

/**
 * El estado es independiente de cada componente.
 * Para poder modificar el estado necesito ejecutar un metodo.
 *
 * Para modificar el estado debo utilizar setState() y mandarle de parametro un objeto que va a reemplazar completamente al objeto estado inicial.
 * El metodo no va a funcionar si no hago el bind, es decir asignarle al atributo this.vender el metodo vender.
 */
export default Cupcacke
