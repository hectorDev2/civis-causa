import React from "react";
import Image from "next/image";

import image1 from "../../../public/images/AdobeStock_243316762.jpeg";
import image2 from "../../../public/images/BOTAS_ACCION.jpeg";
import image3 from "../../../public/images/AdobeStock_573574504.jpeg";
import image4 from "../../../public/images/AdobeStock_53800966.jpeg";
import image5 from "../../../public/images/AdobeStock_381903512.jpeg";

const Content = () => {
  return (
    <>
      <div className=" content ">
        <div className="flex py-6 flex-wrap gap-2 flex-row-reverse justify-center items-center">
          <div className="relative">
            <Image
              src={image1}
              width={500}
              height={500}
              alt={"justicia civis causa"}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[60%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
              <h3 className="text-title text-[30px] text-title m-auto">
                ¿Sientes que el sistema de justicia responde a tus necesidades,
                soluciona tus problemas?
              </h3>
            </div>
          </div>
          <div className="text-[19px] font-light sm:w-[320px] md:w-[500px]">
            Consideramos a la justicia como unos de los{" "}
            <span className="font-bold text-[#00a326]">
              pilares del orden social determinante
            </span>{" "}
            del logro de la prosperidad, de la emancipación de las personas, de
            los avances en los demás sectores de la colectividad, aportando la
            libertad en términos tangibles la capacidad de elección, sin el
            dominio de grupos de poder y libre de la influencia (manipulación)
            de los medios de comunicación.
          </div>
        </div>
        <div className="flex py-6 flex-wrap gap-2 justify-center items-center">
          <div className="relative">
            <Image
              alt="fuerza civis causa"
              src={image2}
              width={500}
              height={500}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[60%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
              <h3 className="text-title text-[30px] m-auto">
                ¡Por un sistema de justicia que funcione!
              </h3>
            </div>
          </div>
          <div className="text-[19px] font-light sm:w-[320px] md:w-[500px]">
            <span className="font-bold text-[#00a326]">
              En nuestro movimiento
            </span>{" "}
            proponemos democratizar el sistema de justicia, conectándose con las
            necesidades de los ciudadanos, como instrumento al servicio de
            todos, creando las condiciones que aseguren el cambio, donde cada
            quien pueda producir, crear, vivir en plenitud, sin tantas trabas ni
            limitaciones en el devenir de sus vidas.
            <button className="bg-white font-bold text-title  p-4 rounded-[63px]  my-3    text-zinc-900">
              <strong>HAGAMOS EL CAMBIO JUNTOS</strong>
            </button>
          </div>
        </div>
        {/* <div className="flex py-6 flex-wrap gap-2 flex-row-reverse justify-center items-center">
        <div className="relative">
          <Image
            src={image3}
            width={500}
            alt="variedad de personas civis causa"
            height={500}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[60%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="text-title text-[30px] m-auto">
              Un camino con nuevas dimensiones
            </h3>
          </div>
        </div>
        <div className="text-[19px] font-light sm:w-[320px] md:w-[500px]">
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
            width={500}
            height={500}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[60%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="text-title text-[30px] m-auto">
              sientes que el sistema de justicia responde a tus
              necesedades,soluciona tus problemas?
            </h3>
          </div>
        </div>
        <div className="text-[19px] font-light sm:w-[320px] md:w-[500px]">
          En nuestro movimiento proponemos democratizar el sistema de justicia,
          conectándose con las necesidades de los ciudadanos, como instrumento
          al servicio de todos, creando las condiciones que aseguren el cambio,
          donde cada quien pueda producir, crear, vivir en plenitud, sin tantas
          trabas ni limitaciones en el devenir de sus vidas.
        </div>
      </div> */}

        {/* <div className="flex py-6 flex-wrap flex-row-reverse gap-2 justify-center items-center">
        <div className="relative">
          <Image
            alt="dama de la justicia,civis causa"
            src={image5}
            width={500}
            height={500}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[60%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
            <h3 className="text-title text-[30px] m-auto">
              Únete, participa y contribuye con nuestro proyecto, tu aporte es
              importante de cualquier forma que creas o puedas. Tu participación
              logrará cambios significativos en la sociedad
            </h3>
          </div>
        </div>
        <div className="text-[19px] font-light sm:w-[320px] md:w-[500px]">
          Hemos de organizarnos, generar canales de comunicación para difundir
          nuevos estándares de justicia que trabajen para las personas, debemos
          integrar a un equipo de profesionales que ponga en marcha un
          despliegue de campañas efectivas, con la finalidad de obtener
          resultados palpables, medibles a la altura de los objetivos
          planteados.
          <button className="bg-white font-bold text-title  p-4 rounded-[63px]  my-3    text-zinc-900">
            <strong>HAGAMOS EL CAMBIO JUNTOS</strong>
          </button>
        </div>
      </div> */}
      </div>
      <div className="content-2 py-[200px] bg-[#2b2b2b]">
        <div className="flex py-6 flex-wrap gap-2 flex-row-reverse justify-center ">
          <div className="relative w-100">
            <Image
              src={image3}
              width={500}
              alt="variedad de personas civis causa"
              height={500}
            />

            <div className="absolute top-0 left-0 right-0 bottom-0 w-[70%] m-[auto]  h-[60%] bg-[rgba(27,163,59,0.5);] flex items-center text-center">
              <h3 className="text-title text-[30px] m-auto">
                Un camino con nuevas dimensiones
              </h3>
            </div>
            <p className="w-[100%] absolute top-[675px] md:top-[325px] m-auto  text-center">
              Civis Causa recomienda un camino con nuevas dimensiones,
              asegurando una justicia que funcione para todos.
            </p>
          </div>
          <div className="text-[19px] font-light sm:w-[320px] md:w-[500px]">
            <p>
              Nuestra propuesta va más allá de una lucha por derechos civiles en
              contra de un sistema corrupto, mafioso que ha hecho metástasis,
              volviéndose hostil hacia los ciudadanos.
            </p>
            <br />
            <p>
              Aportamos soluciones a las personas, influyendo en la
              transformación de sus comunidades, replicándose en la sociedad, en
              beneficio de las naciones donde implementemos el programa de
              democratización de Civís Causa.
            </p>
            <button className="bg-white font-bold text-title  p-4 rounded-[63px]  my-3    text-zinc-900">
              <strong>HAGAMOS EL CAMBIO JUNTOS</strong>
            </button>
          </div>
        </div>
      </div>
      <div className="content-3 grid place-items-center py-5">
        <div className=" flex flex-wrap justify-center gap-[40px]  pt-[100px] text-black">
          <div className="flex m:w-[320px] md:w-[500px] py-6 flex-wrap gap-2 flex-row-reverse ">
            <h3 className="text-[19px] bg-white p-10">
              Promovemos un sistema jurídico eficiente, efectivo, enmarcado
              dentro de la democratización de la justicia, que garantice un
              servicio ágil, asequible, equitativo, fácil, simplificado,
              expedito, independiente, humanista al servicio de las personas,
              con la mera misión de facilitar la vida, y no a favor de grupos de
              poder
            </h3>
          </div>
          <div className="text-[19px] font-light sm:w-[320px] md:w-[500px]">
            <h2 className="text-[80px] text-title text-center text-[#1ba33b]">
              valores
            </h2>
            <br />
            <h3 className=" text-[19px] bg-white p-10">
              <span className="text-[#1ba33b]">
                Para lograr estos resultados
              </span>
              , hemos creado un programa con estándares que garanticen procesos
              transparentes que permitan la consecución de los objetivos
              planteados para el empoderamiento ciudadano.
            </h3>
          </div>
        </div>
        <button className="bg-white font-bold text-title m-[auto]  p-4 rounded-[63px]  my-3    text-zinc-900">
          <strong>HAGAMOS EL CAMBIO JUNTOS</strong>
        </button>
      </div>

      <div className=" py-[100px] bg-[#2b2b2b]">
        <div className="flex py-6 flex-wrap gap-8  justify-center  items-center">
          <div className="relative w-100 md:w-[45%] m-auto">
            <Image
              src={image4}
              alt="variedad de personas civis causa"
              className="m-auto"
            />
            <p className="w-[500px] py-2 text-left m-auto">
              Una justicia tortuosa, ilusoria, no funciona, divorciada de los
              intereses de las personas, sin garantías, en otras palabras la
              justicia es impracticable.
            </p>
          </div>
          <div className="text-[19px] font-light sm:w-[320px] pr-8 md:w-[50%]">
            <h3 className="text-[49px] text-title text-[#1ba33b] ">
              ¿Necesitamos democratizar la justicia?
            </h3>
            <br />
            <p>
              Aportamos soluciones a las personas, influyendo en la
              transformación de sus comunidades, replicándose en la sociedad, en
              beneficio de las naciones donde implementemos el programa de
              democratización de Civís Causa.
            </p>
            <button className="bg-white  font-bold text-title  text-[20px] p-4 rounded-[63px]  my-3    text-zinc-900">
              <strong>CONVIERTETE EN VOLUNTARIADO</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
