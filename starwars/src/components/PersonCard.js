import React, { useState, useEffect } from 'react';

const PersonCard = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    );
  };
  
  export default PersonCard;