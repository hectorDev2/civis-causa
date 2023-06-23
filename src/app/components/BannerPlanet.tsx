import React from "react";

export const BannerPlanet = () => {
  return (
    <div className="banner-planet py-[300px]">
      <h2 className=" text-title text-[49px] text-white text-4xl text-center bg-black/50 my-5">
        Una propuesta de cambio
      </h2>
      <p className="text-center text-lg text-[19px] text-white mb-5 w-[100%] md:w-[40%] bg-black/50">
        Hemos de organizarnos, generar canales de comunicación para difundir
        nuevos estándares de justicia que trabajen para las personas, debemos
        integrar a un <strong>equipo de profesionales</strong> que ponga en
        marcha un despliegue de campañas efectivas, con la finalidad de obtener
        resultados palpables, medibles a la altura de los objetivos planteados.
        <br /> Desde <strong>Civís Causa</strong> se han estructurado objetivos
        con valores, y metas que permiten conformar un movimiento civil que
        impulse un cambio en la justicia.
      </p>
      <button className="text-title text-[30px] bg-white  p-[9px] my-5 px-[20px] rounded-[63px]  ">
        SALIR DEL JUEGO
      </button>
    </div>
  );
};
