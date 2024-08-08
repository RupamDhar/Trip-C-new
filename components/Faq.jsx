import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mt-24 w-full px-5">
            <div className="bg-gray-100 p-5 rounded-lg">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">FAQ's</h3>
                    <a href="/faqs" className="text-red-400 font-bold text-lg">View All</a>
                </div>
                <div>
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left font-bold text-lg sm:text-base py-2 px-3 rounded-lg focus:outline-none bg-white text-gray-800"
                            >
                                {faq.question}
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                                <div className="p-4 bg-white">
                                    <p className="text-base text-gray-700">{faq.answer}</p>
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
        question: "How do I book a car with Trip-C?",
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
