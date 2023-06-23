import Content from "./components/Content";
import { BannerPlanet } from "./components/BannerPlanet";

export default async function Home() {
  return (
    <div className=" relative z-0 w-[100%] h-[100%]">
      <div className="m-auto">
        <div className="hero  gap-[75px] w-full h-[600px] md:h-[800px]">
          <div className="text  md:w-[40%] sm:w-full">
            <span className=" text-cyan-400">
              ¡Por un sistema humanista al servicio ciudadano!
            </span>
            <h1 className="text-4xl font-bold text-white">
              El primer paso Un plan para democratizar la Justicia
            </h1>
            <strong>
              <span className="text-title text-xs  text-cyan-400">
                Creemos en el valor y la libertad de las personas como figura
                central en la vida democrática de una sociedad para que ésta sea
                transformada.
              </span>
            </strong>
          </div>
          <div className="notify md:w-[30%] sm:w-full h-fit    bg-cyan-400 rounded p-2">
            <span>Enter your email below to be in the loop.</span>
            <div className="input flex justify-center gap-2">
              <input
                placeholder="email aqui"
                className="bg-white p-2 w-[70%]"
                type="text"
              />
              <button className="bg-orange-500 w-[200px] p-2">notify me</button>
            </div>
          </div>
        </div>
        <Content />
        <BannerPlanet />
        {/* <Faq content={faqContent1} title="haz que suceda!" />
        <Faq content={faqContent2} title="cualquier aporte es valioso" />
        <Footer /> */}
      </div>
    </div>
  );
}
