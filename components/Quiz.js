import React, { useState } from 'react';

const Quiz = ({ question, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
    handleAnswer(option);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={`px-4 py-2 rounded ${
              selectedOption === option
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
