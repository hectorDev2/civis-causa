"use client";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
function Faq({
  title = "title",
  content = [
    {
      subtitle: "Voluntariado",
      content: "Conoce cómo puedes aportar según tu tiempo e interés.",
    },
    {
      subtitle: "Militante",
      content:
        "Sé protagonista de una sociedad sin dueños.Únete, qué no te fragmenten.",
    },
  ],
}) {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id: string) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id: string) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id: string) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="faq-content">
          <div className="faq-content__title text-white">
            <h2>{title}</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>

          <div className="all-questions">
            {content.map((item, index) => (
              <div
                key={index}
                className="faq-box w-[300px] md:w-[500px] lg:w-[800px] "
              >
                <div
                  id={`q${index + 1}`}
                  onClick={() => openQ(`q${index + 1}`)}
                  className={`faq-box__question  ${getClassQuestion(
                    `q${index + 1}`
                  )}`}
                >
                  <p>
                    {index + 1} - {item.subtitle}
                  </p>
                  <BsArrowDownShort size={32} />
                </div>
                <div
                  id={`q${index + 1}`}
                  onClick={() => openQ(`q${index + 1}`)}
                  className={`faq-box__answer ${getClassAnswer(
                    `q${index + 1}`
                  )}`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
