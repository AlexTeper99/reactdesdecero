const Cupcake = ({descripcion, imagen, sabor, color, precio}) => {
    return(
        <div>
            <img src={ imagen } alt={ sabor } />
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

export default Cupcake