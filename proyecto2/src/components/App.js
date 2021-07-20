import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcackes from "./pages/cupcackes";
import AboutUs from "./pages/aboutUs";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



/*
Como solucionar el error:
    CERRAR LAS ETIQUETAS QUE NO TIENEN CIERRE COMO IMG
*/

const App = () => (
    <>
       <Router>
           <Header/>
           <Switch>
               <Route path="/cupcakes"> <Cupcackes/> </Route>
               <Route path="/nosotros"><AboutUs/></Route>
               <Route path="/"><Home/></Route>

           </Switch>
       </Router>
    </>
)
/*
El switch hace una busqueda de los nombres de los URL.
El switch compara si esa ruta contiene a ese nombre.
Entonces si una ruta contiene a otra pueden haber problema. Por eso tener la ruta "/" ultima
Esto se puede dividir en componentes mas pequenios si la pagina empieza a crecer.
Se puede seccionar en rutas creando nuevos componentes para ir agrupando las rutas segun como crece la aplicacion.
 */

/*
Esto que estoy haciendo no es una SPA porque recarga toda la pagina al saltar de ruta.
Una SPA es una aplicacion que funciona en una sola pagina sin necesidad de recargar.
Para solucionar esto vamos a evitar utilizar elementos <a> y vamos a comenzar a utilizar el Componente Link
 */
export default App;

