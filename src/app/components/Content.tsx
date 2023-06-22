import React from "react";
import Image from "next/image";

import image1 from "../../../public/images/AdobeStock_243316762.jpeg";
import image2 from "../../../public/images/BOTAS_ACCION.jpeg";
import image3 from "../../../public/images/AdobeStock_573574504.jpeg";
import image4 from "../../../public/images/AdobeStock_53800966.jpeg";
import image5 from "../../../public/images/AdobeStock_381903512.jpeg";

const Content = () => {
  return (
    <div className="content">
      <div className="flex py-6 flex-wrap gap-2 flex-row-reverse justify-center items-center">
        <div className="relative">
          <Image
            src={image1}
            width={600}
            height={600}
            alt={"justicia civis causa"}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[70%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="m-auto">
              ¿Sientes que el sistema de justicia responde a tus necesidades,
              soluciona tus problemas?
            </h3>
          </div>
        </div>
        <div className="text sm:w-[320px] md:w-[500px]">
          Consideramos a la justicia como unos de los pilares del orden social
          determinante del logro de la prosperidad, de la emancipación de las
          personas, de los avances en los demás sectores de la colectividad,
          aportando la libertad en términos tangibles la capacidad de elección,
          sin el dominio de grupos de poder y libre de la influencia
          (manipulación) de los medios de comunicación.
        </div>
      </div>
      <div className="flex py-6 flex-wrap gap-2 justify-center items-center">
        <div className="relative">
          <Image
            alt="fuerza civis causa"
            src={image2}
            width={600}
            height={600}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[70%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="m-auto">
              ¡Por un sistema de justicia que funcione!
            </h3>
          </div>
        </div>
        <div className="text sm:w-[320px] md:w-[500px]">
          En nuestro movimiento proponemos democratizar el sistema de justicia,
          conectándose con las necesidades de los ciudadanos, como instrumento
          al servicio de todos, creando las condiciones que aseguren el cambio,
          donde cada quien pueda producir, crear, vivir en plenitud, sin tantas
          trabas ni limitaciones en el devenir de sus vidas.
        </div>
      </div>
      <div className="flex py-6 flex-wrap gap-2 flex-row-reverse justify-center items-center">
        <div className="relative">
          <Image
            src={image3}
            width={600}
            alt="variedad de personas civis causa"
            height={600}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[70%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="m-auto">Un camino con nuevas dimensiones</h3>
          </div>
        </div>
        <div className="text sm:w-[320px] md:w-[500px]">
          Nuestra propuesta va más allá de una lucha por derechos civiles en
          contra de un sistema corrupto, mafioso que ha hecho metástasis,
          volviéndose hostil hacia los ciudadanos. (Fondo con un filtro oscuro)
        </div>
      </div>

      <div className="flex py-6 flex-wrap gap-2 justify-center items-center">
        <div className="relative">
          <Image
            alt="dama de la justicia,civis causa"
            src={image4}
            width={600}
            height={600}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[70%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="m-auto">
              sientes que el sistema de justicia responde a tus
              necesedades,soluciona tus problemas?
            </h3>
          </div>
        </div>
        <div className="text sm:w-[320px] md:w-[500px]">
          En nuestro movimiento proponemos democratizar el sistema de justicia,
          conectándose con las necesidades de los ciudadanos, como instrumento
          al servicio de todos, creando las condiciones que aseguren el cambio,
          donde cada quien pueda producir, crear, vivir en plenitud, sin tantas
          trabas ni limitaciones en el devenir de sus vidas.
        </div>
      </div>

      <div className="flex py-6 flex-wrap flex-row-reverse gap-2 justify-center items-center">
        <div className="relative">
          <Image
            alt="dama de la justicia,civis causa"
            src={image5}
            width={600}
            height={600}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[70%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="m-auto">
              Únete, participa y contribuye con nuestro proyecto, tu aporte es
              importante de cualquier forma que creas o puedas. Tu participación
              logrará cambios significativos en la sociedad
            </h3>
          </div>
        </div>
        <div className="text sm:w-[320px] md:w-[500px]">
          Hemos de organizarnos, generar canales de comunicación para difundir
          nuevos estándares de justicia que trabajen para las personas, debemos
          integrar a un equipo de profesionales que ponga en marcha un
          despliegue de campañas efectivas, con la finalidad de obtener
          resultados palpables, medibles a la altura de los objetivos
          planteados.
          <button className="bg-white border p-4 rounded-3xl  my-3    text-zinc-900">
            <strong>HAGAMOS EL CAMBIO JUNTOS</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
