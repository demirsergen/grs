'use client';

import React, { useState } from 'react';
import Message from './Message';
import Question from './Question';
import { useRouter } from 'next/navigation';

const MultiStepForm = () => {
  const router = useRouter();

  const questions = [
    {
      category: 'category1',
      categoryName: 'demographic',
      question: 'Name of the protoganist?',
      options: ['Mark', 'Jane'],
    },
    {
      category: 'category1',
      categoryName: 'demographic',
      question: 'How old are you now?',
      options: ['<18', '18-25', '25-39', '40 - 55', '55+'],
    },
    {
      category: 'category1',
      categoryName: 'demographic',
      question: 'What gender do you identify as?',
      options: ['Male', 'Female', 'Queer', 'Non-binary'],
    },
    {
      category: 'category2',
      categoryName: 'personality',
      question: 'Which word describes you better?',
      options: ['Carefree', 'Intense'],
    },
    {
      category: 'category2',
      categoryName: 'cognitive',
      question: 'Do you believe this app will work as intended?',
      options: ['Yes', 'No', 'Maybe'],
      importance: true,
    },
  ];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setIsSubmitted(true);

    // router.push({
    //   pathname: '/preview',
    //   query: { data: JSON.stringify(formData) },
    // });

    router.push(`/preview/?formData=${JSON.stringify(formData)}`);

    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);
  };

  const handleInputChange = (
    category,
    question,
    value,
    categoryName
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: {
        ...prevFormData[category],
        [question]: value,
      },
    }));
  };

  const handleImportanceChange = (category, question, importance) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: {
        ...prevFormData[category],
        [`${question}_importance`]: importance,
      },
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="max-w-lg mx-auto bg-teal-500 p-8 rounded">
      <form onSubmit={handleSubmit}>
        {/* Render questions based on the current step */}
        {questions
          .filter((q) => q.category === `category${step}`)
          .map((q, index) => (
            <Question
              key={index}
              category={q.category}
              question={q.question}
              value={formData[q.category]?.[q.question] || ''}
              onChange={handleInputChange}
              options={q.options}
              importance={
                q.importance
                  ? formData[q.category]?.[
                      `${q.question}_importance`
                    ] || 1
                  : null
              }
            />
          ))}
        {isSubmitted && (
          <Message
            type="success"
            message="Form submitted successfully!"
          />
        )}
        {/* Render navigation buttons */}
        <div>
          {step !== 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
            >
              Previous
            </button>
          )}
          {step !== 2 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
          {step === 2 && (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
