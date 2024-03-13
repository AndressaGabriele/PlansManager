import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const HolidayDetails = ({ holiday }) => {
  const componentRef = useRef();

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <div ref={componentRef}>
        <h2 className="text-xl font-bold mb-4">{holiday.title}</h2>
        <p className="mb-2 flex items-center text-gray-700">
          <FaCalendarAlt className="mr-2" />
          <strong>Data:</strong> {holiday.date}
        </p>
        <p className="mb-2 flex items-center text-gray-700">
          <FaMapMarkerAlt className="mr-2" />
          <strong>Localização:</strong> {holiday.location}
        </p>
        <p className="mb-2 flex items-center text-gray-700">
          <FaUsers className="mr-2" />
          <strong>Participantes:</strong> {holiday.participants}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Descrição:</strong> {holiday.description}
        </p>
        {/* Adicione mais detalhes do plano de férias, se necessário */}
      </div>
      <ReactToPrint
        trigger={() => <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-600">Imprimir</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default HolidayDetails;
