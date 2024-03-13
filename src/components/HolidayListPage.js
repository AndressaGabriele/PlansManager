import React, { useState, useEffect } from "react";

function HolidayListPage() {
  const [addedHolidays, setAddedHolidays] = useState([]);

  useEffect(() => {
    fetchAddedHolidays();
  }, []);

  const fetchAddedHolidays = async () => {
    try {
      const response = await fetch("/api/added-holidays");
      const data = await response.json();
      setAddedHolidays(data);
    } catch (error) {
      console.error("Error fetching added holidays:", error);
    }
  };

  return (
    <div>
      <h1>Lista de Planos de Férias Adicionados</h1>
      <ul>
        {addedHolidays.map((holiday, index) => (
          <li key={index}>
            <p><strong>Título:</strong> {holiday.title}</p>
            <p><strong>Descrição:</strong> {holiday.description}</p>
            <p><strong>Data:</strong> {holiday.date}</p>
            <p><strong>Localização:</strong> {holiday.location}</p>
            <p><strong>Participantes:</strong> {holiday.participants}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HolidayListPage;
