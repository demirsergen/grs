import React from 'react';

const Question = ({
  category,
  question,
  value,
  onChange,
  options,
  importance,
}) => {
  const handleInputChange = (e) => {
    onChange(category, question, e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={question} className="block mb-2">
        {question}:
      </label>
      {options ? (
        <select
          id={question}
          className="border rounded px-4 py-2 w-full mb-2 text-black"
          value={value}
          onChange={handleInputChange}
        >
          <option value="" disabled selected hidden>
            Please choose an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          id={question}
          className="border rounded px-4 py-2 w-full mb-2"
          value={value}
          onChange={handleInputChange}
        />
      )}
      {/* Render importance meter if importance is specified */}
      {importance && (
        <>
          <label
            htmlFor={`${question}_importance`}
            className="block mb-2"
          >
            Importance:
          </label>
          <input
            type="range"
            id={`${question}_importance`}
            min="1"
            max="10"
            value={importance || 1}
            onChange={(e) =>
              onChange(
                category,
                `${question}_importance`,
                e.target.value
              )
            }
            className="w-full"
          />
          <span className="block text-center">{importance || 1}</span>
        </>
      )}
    </div>
  );
};

export default Question;
