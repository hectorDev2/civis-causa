import React from "react";

const Footer = () => {
  return (
    <div className="footer p-6 ">
      <strong className="container">
        <h2 className="text-3xl text-center ">Manos a la obra</h2>
      </strong>
      <ul className="md:mt-[-125px]">
        <li>
          <p className=" text-left mb-2 mw-[500px] text-sm">
            Hacemos un llamado a la participación, al compromiso sin el cual los
            cambios significativos en la sociedad no podrán ocurrir.
          </p>
        </li>
        <li>
          <p className=" text-left mb-2 mw-[500px] text-sm ">
            Todos y cada uno de nosotros, como ciudadanos, requerimos para el
            ejercicio de la vida civil estar en contacto con instituciones
            públicas o privadas en búsqueda de prestaciones de servicios.
          </p>
        </li>
        <li>
          <p className=" text-left mb-2 mw-[500px] text-sm">
            Proporcionamos las bases para sumar esfuerzos con un modelo
            participativo, abrimos un camino para ser transitados a varios
            niveles de compromiso con la causa a la que se les convoca.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
