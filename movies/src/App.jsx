import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import stylesGlob from "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Pokemon from "./components/Pages/Pokemon";
import Promociones from "./components/Pages/Promociones";
import Alquileres from "./components/Pages/Alquileres";

import "bootstrap/dist/css/bootstrap.min.css";

//<h1 className={styles.title}>Movies</h1>
//<MoviesGrid />

export function App() {
  return (
    <div className="stylesGlob">

        <NavbarComp />
        <h1 className={styles.title}>Movies</h1>
        <MoviesGrid />

    </div>
  );
}
