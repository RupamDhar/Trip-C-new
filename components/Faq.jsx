import React, { useState } from 'react';
// import './Faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto sm-max:px-0 sm-max:py-6 px-8 py-8">
            <div className="bg-white rounded-lg sm-max:p-2 p-8">
                <div className="flex md:flex-row justify-between px-4 items-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">FAQ's</h3>
                    <a href="/faqs" className="text-yellow-400 font-bold text-lg">View All</a>
                </div>

                <div>
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-0">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full font-bold sm-max:text-sm text-l text-left py-0 px-2 rounded-lg focus:outline-none"
                            >
                                {faq.question}
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                                <div className="p-4">
                                    <p className="text-sm md:text-base">{faq.answer}</p>
                                </div>
                            </div>
                            {index < faqData.length - 1 && <hr className="my-4" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

const faqData = [
    {
        question: "How do I book a car with Carzonrent?",
        answer: "Simply visit our website, select your preferred location, dates, and car model, and proceed to the booking process. You can also give us a call or use our mobile app for a convenient booking experience."
    },
    {
        question: "What types of cars are available for Rent?",
        answer: "We offer a wide range of cars to suit different needs and preferences. Our fleet includes compact cars, sedans, SUVs, luxury vehicles."
    },
    {
        question: "Are there any additional charges or hidden fees?",
        answer: "The charges displayed during the booking process include the rental fee, taxes, and any applicable fees. We strive to keep our pricing clean and upfront, ensuring no surprises when you pick up the car."
    }
];

export default Faq;
