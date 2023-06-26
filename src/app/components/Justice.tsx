import React from "react";
import Faq from "./Faq";
import Image from "next/image";
import Tabs from "./Tabs";

const Justice = () => {
  return (
    <div className="justice py-[50px] pl-[50px] ">
      <div className="lg:flex justify-center items-center flex-wrap">
        <div className="left w-[45%]">
          <h2 className="text-[48px] text-title text-center">
            ¡Haz que suceda!
          </h2>
          <Faq />
        </div>
        <div className="right w-[45%]">
          <Image
            src={
              "https://markifica.com/dante/wp-content/uploads/2023/04/fondo-tab.jpg"
            }
            alt={"justice para civis causa"}
            width={402}
            height={268}
          />
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Justice;
