import Cupcake from "./Cupcake";
// ./ significa dentro de esta misma carpeta.
//No es necesario ponerle la etiqueta.js ya que webpack se encarga de eso

const App = () => (
    <div>
      <Cupcake color="rosa" sabor="vainilla" />
        {/*<Cupcake color="azul" sabor="chocolate" />*/}

    </div>
);

//importante solo se puede devolver un solo elemento.
export default App;
