import React from "react";
import "../Proyecto/Proyecto.scss";

const Mapa = () => {
    return (
        <div
            id="ubicacion_mapa"
        >
            <iframe
                className="mapa"
                style={{ border: "none" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864202.2684695558!2d-65.25235743148536!3d-32.20988585532702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d296472ef06253%3A0x1ff7be210d812c2!2sCalamuchita%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1747660183631!5m2!1ses!2sar"
                width="400"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default Mapa;