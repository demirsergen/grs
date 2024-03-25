// pages/Preview.js
'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

const Preview = () => {
  const searchParams = useSearchParams();
  const formData = searchParams.get('formData');

  const form = JSON.parse(formData);

  console.log(form);
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Form Preview</h1>
      <div>
        {Object.entries(form).map(([category, answers]) => (
          <div key={category} className="mb-4">
            <h2 className="text-lg font-semibold mb-2">{category}</h2>
            <ul>
              {Object.entries(answers).map(([question, answer]) => (
                <li key={question}>
                  <strong>{question}:</strong> {answer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
