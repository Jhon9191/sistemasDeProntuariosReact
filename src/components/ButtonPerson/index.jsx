import React from 'react';
import './styles.css';

function ButtonPerson({ children, text }) {
  return (
      <div type="submit" className="buttonPerson" hover={true}>
          {children}
          {text}
      </div>
  );
}

export default ButtonPerson;