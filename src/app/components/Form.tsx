import React from "react";

const Form = () => {
  return (
    <div className="w-full max-w-[450px]">
      <div className="bg-[#00353f] py-[50px] px-5 ">
        <h2 className="text-title text-[36px] text-center">
          FORMA PARTE DE LA CAMPAÑA
        </h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nombre y apellido
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="ingrese su nombre"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="correo electronico"
            />
          </div>
          <div className="checkbox ">
            <h2 className="text-black text-[12px] w-[100%]">
              ¿Cómo te gustaria apoyar este movimiento?
            </h2>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label className="text-black" htmlFor="vehicle1">
              {" "}
              voluntariado
            </label>
            <br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label className="text-black" htmlFor="vehicle2">
              {" "}
              Militante
            </label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label className="text-black" htmlFor="vehicle3">
              {" "}
              Alianza y contribuciones
            </label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label className="text-black" htmlFor="vehicle3">
              {" "}
              Partidarios
            </label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label className="text-black" htmlFor="vehicle3">
              {" "}
              Prensa y difusión
            </label>
            <br />
            <input type="submit" value="Submit"></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-[100%] bg-[#078cc0]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              enviar
            </button>
          </div>
        </form>
        <p className="text-center text-white text-xs">
          &copy;Gracias por tu aporte y contribución. Pronto nos pondremos en
          contacto contigo para que nos digas de que formas puedes contribuir
          con nosotros.
        </p>
      </div>
    </div>
  );
};

export default Form;
