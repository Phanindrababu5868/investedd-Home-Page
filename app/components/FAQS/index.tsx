"use client";
import "./index.css";

import FAQSection from "../FAQS/faq";

const questions = [
  {
    id: 1,
    question: "Still wondering what TIPO is?",
    answer:
      "Tipo is an ambition-driven online integration network which helps bring sophisticated investors to invest in IPO, SBG and NCD. We're known for our comprehensive, data-first investing platform. Our mission is to give retail investors exposure to advanced financial technology and help them succeed on their path to wealth accumulation growth",
  },
  {
    id: 2,
    question: "Still wondering what TIPO is?",
    answer:
      "Tipo is an ambition-driven online integration network which helps bring sophisticated investors to invest in IPO, SBG and NCD. We're known for our comprehensive, data-first investing platform. Our mission is to give retail investors exposure to advanced financial technology and help them succeed on their path to wealth accumulation growth",
  },
  {
    id: 3,
    question: "Still wondering what TIPO is?",
    answer:
      "Tipo is an ambition-driven online integration network which helps bring sophisticated investors to invest in IPO, SBG and NCD. We're known for our comprehensive, data-first investing platform. Our mission is to give retail investors exposure to advanced financial technology and help them succeed on their path to wealth accumulation growth",
  },
  {
    id: 4,
    question: "Still wondering what TIPO is?",
    answer:
      "Tipo is an ambition-driven online integration network which helps bring sophisticated investors to invest in IPO, SBG and NCD. We're known for our comprehensive, data-first investing platform. Our mission is to give retail investors exposure to advanced financial technology and help them succeed on their path to wealth accumulation growth",
  },
];
const FAQ = () => {
  return (
    <div className="faq-section-bg-container">
      <p className="Faqs-section-bg-heading">
        Frequently Asked Questions (FAQs)
      </p>
      <div className="faqs-columns-container">
        <FAQSection faqData={questions} />
        <FAQSection faqData={questions} />
      </div>
      <button>Contact Support</button>
    </div>
  );
};

export default FAQ;
