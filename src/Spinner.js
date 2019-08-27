import React from 'react';

const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        Preparing...
      </div>
    </div>
  );
}

export default Spinner;