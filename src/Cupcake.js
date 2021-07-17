//componente presentacional. Componente que se presenta, sin logica
function Cupcacke(props) {
    return (
        <div className="cupcake">
            <h2>{props.color}</h2>
            <p>{`Sabor:  ${props.sabor}`}</p>
        </div>
    )
}
export default Cupcacke
//cuando creo un componente este recibe un Objeto con todas las propiedades.
//Hay que exportarlo e importarlo para usarlo.
//Mis props color y sabor son inventos mios.