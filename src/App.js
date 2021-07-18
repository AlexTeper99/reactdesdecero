import Cupcake from "./Cupcake";
// ./ significa dentro de esta misma carpeta.
//No es necesario ponerle la etiqueta.js ya que webpack se encarga de eso

const App = () => (
    <div>
      <Cupcake color="rosa" sabor="vainilla" foto="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <Cupcake color="rosa" sabor="vainilla" foto="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <Cupcake color="rosa" sabor="vainilla" foto="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <Cupcake color="rosa" sabor="vainilla" foto="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <Cupcake color="rosa" sabor="vainilla" foto="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        {/*<Cupcake color="azul" sabor="chocolate" />*/}

    </div>
);

//importante solo se puede devolver un solo elemento.
export default App;
