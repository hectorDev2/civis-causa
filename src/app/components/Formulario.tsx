import React from "react";
import Faq from "./Faq";
import Form from "./Form";

const Formulario = () => {
  return (
    <div className="formulario py-[150px] pl-[50px] flex justify-center flex-wrap">
      <div className="left w-[47%]">
        <h2 className="text-[48px] text-title text-center">¡Haz que suceda!</h2>
        <Faq />
        <div className="contenido w-[300px] md:w-[500px] m-[auto]">
          <h2 className="text-title text-center text-[48px] ">
            REALIZAR UNA DONACION
          </h2>
          <p className="w-[80%] md:w-[100%] ">
            Apóyanos a garantizar resultados con un equipo dedicado, recursos y
            una gestión en permanencia.
          </p>
          <div className=" bg-[rgba(10,10,10,0.53);] payment p-5">
            <p className=" w-[80%] md:w-[40%] ">
              <strong>Account holder</strong>: CIVIS CAUSA <br />
              <strong>BIC</strong>: TRWIBEB1XXX IBAN: BE88 9675 6413 0441 <br />
              <strong>Wise’s address</strong>: Avenue Louise 54, Room S52 <br />
              Brussels <br />
              1050 <br />
              Belgium
            </p>
          </div>
        </div>
      </div>
      <div className="right w-[47%]">
        <Form />
      </div>
    </div>
  );
};

export default Formulario;
