import React from 'react';
import loader from '../images/loader.png';

function Loading() {
  return (
    <div className="loading">
      <img src={loader} />
    </div>
  );
}

export default Loading;
