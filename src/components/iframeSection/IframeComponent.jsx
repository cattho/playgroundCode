import React from "react";

const IframeComponent = ({ userCode }) => {
  return (
    <div className='result-container'>
      <h3>Result</h3>
      <iframe
        src={userCode}
        title='Live Code'
        className='w-full h-full border-none'
      />
    </div>
  );
};

export default IframeComponent;
