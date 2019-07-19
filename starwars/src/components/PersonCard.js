import React, { useState, useEffect } from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react';
const PersonCard = (props) => {
    return (
      <Card className="mycard">
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.name} is a person with {props.eyecolor} eyes.
        </Card.Description>
        
      </Card>
    );
  };
  
  export default PersonCard;