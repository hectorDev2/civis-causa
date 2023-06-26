import Content from "./components/Content";
import { BannerPlanet } from "./components/BannerPlanet";
import Formulario from "./components/Formulario";
import Justice from "./components/Justice";

export default async function Home() {
  return (
    <div className=" relative z-0 w-[100%] h-[100%]">
      <div className="m-auto">
        <div className="bg-white grid place-items-center align-middle  gap-[75px] w-full h-[550px] md:h-[800px]">
          <div className="text  md:w-[60%] sm:w-full flex flex-col items-center">
            <h1 className="text-[93px]  leading-[100px]  text-title  text-center  text-[#1ba33b]">
              Un plan para democratizar la Justicia
            </h1>

            <span className=" text-black text-[19px] text-center font-semibold">
              Creemos en el valor y la libertad de las personas como figura
              central en la vida democrática de una sociedad para que ésta sea
              transformada
            </span>
            <button className="bg-black text-title rounded-[63px] text-[30px] w-[200px] my-8 p-3  m-[auto]">
              ME INTERESA
            </button>
          </div>
        </div>
        <Content />
        <BannerPlanet />
        <Formulario />
        <Justice />
        {/* <Faq content={faqContent1} title="haz que suceda!" />
        <Faq content={faqContent2} title="cualquier aporte es valioso" />
        <Footer /> */}
      </div>
    </div>
  );
}
