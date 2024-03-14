import React, { useState, useEffect } from 'react';
import './App.css';
import HolidayForm from 'components/HolidayForm';
import HolidayList from 'components/HolidayList';

function App() {
  const [holidays, setHolidays] = useState(() => {
    return JSON.parse(localStorage.getItem('holidays')) || [];
  });
  const [selectedHolidayIndex, setSelectedHolidayIndex] = useState(null);

  useEffect(() => {
    const savedHolidays = JSON.parse(localStorage.getItem('holidays'));
    if (savedHolidays) {
      setHolidays(savedHolidays);
    }
  }, []);

  const saveHolidaysToLocalStorage = (holidays) => {
    localStorage.setItem('holidays', JSON.stringify(holidays));
  };

  const handleAddHoliday = (newHoliday) => {
    const updatedHolidays = [...holidays, newHoliday];
    setHolidays(updatedHolidays);
    saveHolidaysToLocalStorage(updatedHolidays);
  };

  const handleEditHoliday = (index) => {
    setSelectedHolidayIndex(index);
  };

  const handleUpdateHoliday = (updatedHoliday) => {
    const updatedHolidays = [...holidays];
    updatedHolidays[selectedHolidayIndex] = updatedHoliday;
    setHolidays(updatedHolidays);
    saveHolidaysToLocalStorage(updatedHolidays);
    setSelectedHolidayIndex(null);
  };

  const handleCancelEdit = () => {
    setSelectedHolidayIndex(null);
  };

  const handleDeleteHoliday = (index) => {
    const updatedHolidays = [...holidays];
    updatedHolidays.splice(index, 1);
    setHolidays(updatedHolidays);
    saveHolidaysToLocalStorage(updatedHolidays);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <header className="App-header bg-blue-900 py-4 px-8 text-white">
        <h1 className="text-3xl font-bold">Plano de Férias 2024</h1>
      </header>
      <main className="flex-grow p-8">
        <HolidayForm
          onAddHoliday={handleAddHoliday}
          onUpdateHoliday={handleUpdateHoliday}
          onCancelEdit={handleCancelEdit}
          editingHoliday={selectedHolidayIndex !== null ? holidays[selectedHolidayIndex] : null}
        />
        <HolidayList
          holidays={holidays}
          onEditHoliday={handleEditHoliday}
          onDeleteHoliday={handleDeleteHoliday}
        />
      </main>
    </div>
  );
}

export default App;
