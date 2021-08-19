import React from 'react';
import './styles.css';

function ButtonPerson({ children, text , func}) {
  return (
      <div type="submit" className="buttonPerson" hover={true} onClick={func}>
          {children}
          {text}
      </div>
  );
}

export default ButtonPerson;