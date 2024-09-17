"use client";
import React, { useState } from "react";
import AnimatedTitle from "./common/AnimatedTitle";
import AnimatedComponent from "./common/AnimatedScrollComponent";
import { motion } from "framer-motion";

interface AccordionData {
  title: string;
  details: string;
}

interface AccordionProps {
  info: AccordionData;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  info,
  index,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <AnimatedComponent id={info.title}>
      <div className="w-full flex justify-between border-b pb-6">
        <div className="flex gap-8 md:gap-16">
          <h4 className="text-xl text-primary font-medium">0{index + 1}</h4>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="text-xl font-medium text-[#282938] w-full text-start"
              onClick={() => toggleAccordion(index)}
            >
              {info.title}
            </button>
            {isOpen && (
              <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // Corrected opacity value
              transition={{ duration: 0.5 }} // Duration of the transition
              className="w-2/3 text-gray-600 transition-all duration-300 ease-in-out"
            >
                {info.details}
              </motion.p>
            )}
          </div>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => toggleAccordion(index)}
        >
          {isOpen ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L12.5 12.5M1.5 12.5L12.5 1.5L1.5 12.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8075 9H17.3638M9.58567 16.7782V1.22183V16.7782Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </AnimatedComponent>
  );
};

const Faq = () => {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);
  const accordionData: AccordionData[] = [
    {
      title: "Is this course really free?",
      details:
        "The courses provided can be accessed for free to support educational needs.",
    },
    {
      title: "Who is this course for?",
      details:
        "The courses provided can be accessed for free to support educational needs.",
    },
    {
      title: "Is this course certified?",
      details:
        "The courses provided can be accessed for free to support educational needs.",
    },
    {
      title: "When does this course end?",
      details:
        "The courses provided can be accessed for free to support educational needs.",
    },
    {
      title: "Are there job placements after graduation?",
      details:
        "The courses provided can be accessed for free to support educational needs.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-10 pt-20 pb-10 flex flex-col md:flex-row gap-40">
      <div className="md:w-[35%] flex flex-col gap-2">
        <AnimatedTitle
          styles="text-2xl font-semibold md:w-2/3"
          title="Frequently Asked Questions"
        />
        <p className="text-[#282938] mt-2">
          Still confused or unsure? Contact us at +234 800 567 8901
        </p>
      </div>

      <div className="md:w-[65%] flex flex-col gap-8">
        {accordionData.map((info, index) => (
          <Accordion
            key={index + info.title}
            info={info}
            index={index}
            isOpen={isOpenIndex === index}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
