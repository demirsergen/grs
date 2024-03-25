import React from 'react';

const Message = ({ type, message }) => {
  let classes = '';
  if (type === 'success') {
    classes = 'bg-green-200 text-green-800';
  } else if (type === 'failure') {
    classes = 'bg-red-200 text-red-800';
  } else {
    classes = 'bg-gray-200 text-gray-800';
  }

  return (
    <div
      className={`border border-solid border-gray-300 p-4 rounded ${classes} mb-4`}
    >
      {message}
    </div>
  );
};

export default Message;
