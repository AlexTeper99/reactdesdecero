const Cupcake = ({descripcion, image, sabor, color, precio}) => {
    return(
        <div>
            <img src={ image } alt={ sabor } />
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

export default Cupcake