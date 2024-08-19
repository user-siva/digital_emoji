import React from 'react';

const cardData = [
  { title: 'Research', content: 'Research content goes here.', titleColor: 'bg-[#263B7E]', contentColor: 'bg-[#5C1F5B]' },
  { title: 'Planning', content: 'Planning content goes here.', titleColor: 'bg-[#263B7E]', contentColor: 'bg-[#5C1F5B]' },
  { title: 'Unique Value', content: 'Unique value content goes here.', titleColor: 'bg-[#263B7E]', contentColor: 'bg-[#5C1F5B]' },
  { title: 'Content Delivery', content: 'Content delivery content goes here.', titleColor: 'bg-[#263B7E]', contentColor: 'bg-[#5C1F5B]' },
  { title: 'Review and Improve', content: 'Review and improve content goes here.', titleColor: 'bg-[#263B7E]', contentColor: 'bg-[#5C1F5B]' },
];

const Strategies = () => {
  return (

    <>
    <h1 className="font-bold mb-1 not-italic text-5xl">
        <span style={{ color: '#263B7E' }}>Stra</span>
        <span style={{ color: '#5C1F5B' }}>tegies</span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        
      {cardData.map((card, index) => (
        <div key={index} className="relative group h-48 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className={`${card.titleColor} h-48 flex items-center justify-center text-xl font-bold text-white p-4 transition-transform transform group-hover:translate-y-full`}>
            {card.title}
          </div>
          <div className={`absolute inset-0 ${card.contentColor} flex items-center justify-center text-lg text-white p-4 transition-transform transform translate-y-full group-hover:translate-y-0`}>
            {card.content}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Strategies;
