import React from "react";

const IframeComponent = ({ userCode }) => {
  return (
    <iframe
      src={userCode}
      title='Live Code'
      className='w-full h-full border-none'
    />
  );
};

export default IframeComponent;
