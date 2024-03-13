import React, { useState } from "react";

function HolidayForm({ onAddHoliday }) {
  const isValidDateValue = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    participants: "",
  });

  const [dateError, setDateError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidDateValue(formData.date)) {
      setDateError("Data inválida. Por favor, insira uma data válida.");
      setTimeout(() => {
        setDateError("");
      }, 5000);
      return;
    }

    onAddHoliday(formData);
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      participants: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Adicionar Plano de Férias</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          className="mt-1 p-2 border rounded-md w-full"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descrição"
          className="mt-1 p-2 border rounded-md w-full"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Data"
          className="mt-1 p-2 border rounded-md w-full"
          value={formData.date}
          onChange={handleChange}
          required
        />
        {dateError && <p className="text-red-500">{dateError}</p>}
        <input
          type="text"
          name="location"
          placeholder="Localização"
          className="mt-1 p-2 border rounded-md w-full"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="participants"
          placeholder="Participantes"
          className="mt-1 p-2 border rounded-md w-full"
          value={formData.participants}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Adicionar Plano de Férias
        </button>
      </form>
    </div>
  );
}

export default HolidayForm;
