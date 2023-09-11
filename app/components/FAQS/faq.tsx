"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq-section">
      {faqData.map((item, index) => (
        <div key={index} className="faq-section-question-answer-container">
          <div
            className="faq-question-conatiner"
            onClick={() => toggleFAQ(index)}
          >
            <span className="faq-question">{item.question}</span>
            {openIndex === index ? (
              <div className="arrow-container">
                <img
                  src="/Images/upArrow.png"
                  alt="upArrow"
                  className="arrow-img"
                />
              </div>
            ) : (
              <div className="arrow-container">
                <img
                  src="/Images/downArrow.png"
                  alt="downArrow"
                  className="arrow-img"
                />
              </div>
            )}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
