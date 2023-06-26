"use client";
const content = [
  {
    subtitle: "Voluntariado",
    content: "Conoce cómo puedes aportar según tu tiempo e interés.",
  },
  {
    subtitle: "Militante",
    content:
      "Sé protagonista de una sociedad sin dueños.Únete, qué no te fragmenten.",
  },
];

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="grid place-items-center">
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="w-[300px] md:w-[500px]  lg:w-[450px]  bg-[#005168]"
      >
        <AccordionHeader
          className="text-white p-5 hover:text-white"
          onClick={() => handleOpen(1)}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-white p-5 hover:text-white">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="w-[300px] md:w-[500px]  lg:w-[450px] bg-[#005168] text-white"
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          className={`text-white p-5 hover:text-white `}
          onClick={() => handleOpen(2)}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-white p-5 hover:text-white">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="w-[300px] md:w-[500px]  lg:w-[450px] bg-[#005168] text-white"
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          className="text-white p-5 hover:text-white"
          onClick={() => handleOpen(3)}
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-white p-5 hover:text-white">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
