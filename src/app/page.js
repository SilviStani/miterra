
import Fotos from "../../Components/Fotos/Fotos.jsx";
import Inicio from "../../Components/Inicio/Inicio.jsx";
import NavBar from "../../Components/Navbar/NavBar";
import Parallax from "../../Components/Parallax/Parallax";
import { Proyecto } from "../../Components/Proyecto/Proyecto.jsx";


export default function Home() {
  return (
    <div>
      <section id="Inicio">
        <NavBar />
        <Inicio />
      </section>
      <section id="Proyecto">
        <Parallax/>
      </section>
      <section><Proyecto/></section>
      {/*<section>mapa</section>*/}
      <section id="Fotos"><Fotos/></section>
    </div>
  );
}
