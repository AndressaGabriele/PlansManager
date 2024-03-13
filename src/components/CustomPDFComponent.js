import React from 'react';

const CustomPDFComponent = ({ holiday }) => {
  return (
    <div>
      <h2>{holiday.title}</h2>
      <p><strong>Descrição:</strong> {holiday.description}</p>
      <p><strong>Data:</strong> {holiday.date}</p>
      <p><strong>Localização:</strong> {holiday.location}</p>
      <p><strong>Participantes:</strong> {holiday.participants}</p>
    </div>
  );
};

export default CustomPDFComponent;
