import React from "react";

export const BannerPlanet = () => {
  return (
    <div className="banner-planet ">
      <h2 className="text-white text-4xl text-center bg-black/50">
        Una propuesta de cambio
      </h2>
      <p className="text-center text-lg text-white w-[100%] md:w-[50%] bg-black/50">
        Hemos de organizarnos, generar canales de comunicación para difundir
        nuevos estándares de justicia que trabajen para las personas, debemos
        integrar a un <strong>equipo de profesionales</strong> que ponga en
        marcha un despliegue de campañas efectivas, con la finalidad de obtener
        resultados palpables, medibles a la altura de los objetivos planteados.
        <br /> Desde <strong>Civís Causa</strong> se han estructurado objetivos
        con valores, y metas que permiten conformar un movimiento civil que
        impulse un cambio en la justicia.
      </p>
      <button className="bg-white border p-4 rounded-3xl  ">
        SALIR DEL JUEGO
      </button>
    </div>
  );
};
