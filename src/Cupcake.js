import {Component} from "react";

class Cupcacke extends Component{
    render(){
        return(
            <div className="cupcake">
              <h2>{this.props.color}</h2>
              <p>{`Sabor:  ${this.props.sabor}`}</p>
            </div>
        )
    }
}
//para acceder a las props la sintaxis cambia y se utiliza la palabra reservada this.

export default Cupcacke
