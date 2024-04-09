import HolidayDetails from "components/HolidayDetails";
import React, { useState } from "react";

function HolidayList({ holidays, onEditHoliday, onDeleteHoliday }) {
  const [selectedHolidayIndex, setSelectedHolidayIndex] = useState(null);

  const handleHolidayClick = (index) => {
    setSelectedHolidayIndex(index);

  };
  

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Planos de Férias</h2>
      <ul>
        {holidays.map((holiday, index) => (
          <li key={index} className="mb-4 border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{holiday.title}</h3>
            <p className="text-gray-700 mb-2">
              <strong>Descrição:</strong> {holiday.description}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Data de Início:</strong> {holiday.fromDate}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Data de Término:</strong> {holiday.toDate}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Localização:</strong> {holiday.location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Participantes:</strong> {holiday.participants}
            </p>
            <div className="flex items-center space-x-4">
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => onEditHoliday(index)}
              >
                Editar
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => onDeleteHoliday(index)}
              >
                Excluir
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={() => handleHolidayClick(index)}
              >
                Ver Detalhes
              </button>
            </div>
            {selectedHolidayIndex === index && (
              <HolidayDetails holiday={holiday} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HolidayList;
