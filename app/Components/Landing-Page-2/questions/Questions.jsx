"use client";
import { useState } from "react";

function FAQItem({ faq, index, activeIndex, onToggle }) {
  const isActive = activeIndex === index;

  return (
    <div
      className={`rounded-lg transition-all ${
        isActive ? "bg-blue-50" : "hover:bg-blue-50"
      }`}
    >
      <button
        type="button"
        aria-expanded={isActive}
        className="w-full text-base font-semibold text-left py-5 px-6 text-[#333] flex items-center"
        onClick={() => onToggle(index)}
      >
        <span className="mr-4">{faq.question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 fill-current ml-auto shrink-0 transform transition-transform duration-300 ${
            isActive ? "rotate-180" : "-rotate-90"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="pb-5 px-6">
          <p className="text-sm text-[#333]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-[sans-serif] space-y-4 max-w-6xl mx-auto py-12 mt-40">
      <h2 className="text-3xl font-extrabold text-[#333] mb-8">FAQS</h2>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          index={index}
          activeIndex={activeIndex}
          onToggle={toggleAccordion}
        />
      ))}
    </div>
  );
}

const faqData = [
  {
    question:
      "Are there any special discounts or promotions available during the event?",
    answer:
      "Yes, there are several special discounts and promotions available during the event...",
  },
  {
    question: "What are the dates and locations for the product launch events?",
    answer:
      "The product launch events will take place on the 15th of August in New York...",
  },
  {
    question: "Can I bring a guest with me to the product launch event?",
    answer:
      "Yes, you are allowed to bring one guest to the event. Please make sure to register them in advance...",
  },
  {
    question: "How can I contact the event organizers?",
    answer:
      "You can contact the event organizers via email at contact@example.com or call us at 123-456-7890...",
  },
  {
    question: "Is there parking available at the venue?",
    answer:
      "Yes, parking is available at the venue. We recommend arriving early to secure a spot...",
  },
];
