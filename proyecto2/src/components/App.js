import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcackes from "./pages/cupcackes";

/*
Como solucionar el error:
    CERRAR LAS ETIQUETAS QUE NO TIENEN CIERRE COMO IMG
*/

const App = () => (
    <>
        <Header></Header>
        <Home></Home>
        <Cupcackes></Cupcackes>
    </>

)

export default App;

