"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Example() {
  const data = [
    {
      label: "Compromiso por el cambio",
      value: "compromiso",
      desc: `Si estás cansado de no conseguir respuesta ante atropellos de las instituciones, la única manera de cambiar esto, es participando, únete a nosotros, vamos juntos a poner valor a las personas. Tú haces falta.`,
    },
    {
      label: "Programas de Actividades - Nuestra Propuesta ",
      value: "programa",
      desc: `Proponemos un programa de empoderamiento ciudadano, allí establecemos una serie de herramientas que brindarán cambios en la estructura ante ingentes problemas que confronta la sociedad. Nuestro pilar de arranque será la Democratización de la Justicia.`,
    },
    {
      label: "La causa:La democratizacion de la Justicia",
      value: "causa",
      desc: `La Democratización de la Justicia aporta soluciones enfocadas en redimensionar la relación (control) entre el Estado, medios de comunicación y las personas. Es un proyecto ambicioso que va más allá de las ayudas interminables fuera de contexto que buscan apañar los síntomas sin proponer verdaderas soluciones.
La transformación es posible mediante nuestros programas diseñados con herramientas para la emancipación en beneficio del ciudadano, aportando
mecanismos para empoderar a las personas.`,
    },
  ];

  return (
    <Tabs
      value="html"
      className={
        "container xl:ml-[155px] lg:ml-[50px] md:w-[500px] lg:w-[940px]   my-12   bg-[#005168] "
      }
    >
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-[10px]">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }, index) => (
          <TabPanel key={value} value={value} className="text-white">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
