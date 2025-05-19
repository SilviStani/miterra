
import Inicio from "../../Components/Inicio/Inicio.jsx";
import NavBar from "../../Components/Navbar/NavBar";
import Parallax from "../../Components/Parallax/Parallax";
import { Proyecto } from "../../Components/Proyecto/Proyecto.jsx";


export default function Home() {
  return (
    <div>
      <section id="inicio">
        <NavBar />
        <Inicio />
      </section>
      <section>
        <Parallax />
      </section>
      <section><Proyecto/></section>
      <section>Contacto</section>
      <section>mapa</section>
    </div>
  );
}
