import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import holidaySchema from "utils/holidaySchema";

function HolidayForm({ onAddHoliday, editedHolidayIndex, holidays }) {
  const [validationErrors, setValidationErrors] = useState({});
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const editedHoliday = editedHolidayIndex !== null ? holidays[editedHolidayIndex] : null;

  useEffect(() => {
    if (editedHoliday) {
      reset(editedHoliday);
    }
  }, [editedHoliday, reset]);

  const onSubmit = async (data) => {
    try {
      await holidaySchema.validate(data, { abortEarly: false });
      onAddHoliday(data, editedHolidayIndex);
      reset();
    } catch (error) {
      const errors = {};
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setValidationErrors(errors);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Adicionar Plano de Férias</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          className="mt-1 p-2 border rounded-md w-full"
          {...register("title", { required: true })}
        />
        {errors.title && <p className="text-red-500">Título é obrigatório</p>}
        <textarea
          name="description"
          placeholder="Descrição"
          className="mt-1 p-2 border rounded-md w-full"
          {...register("description", { required: true })}
        />
        {errors.description && <p className="text-red-500">Descrição é obrigatória</p>}
        <div className="flex space-x-4">
          <div>
            <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">Data de Início</label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              className="mt-1 p-2 border rounded-md w-full"
              {...register("fromDate", { required: true })}
            />
            {errors.fromDate && <p className="text-red-500">Data de início é obrigatória</p>}
          </div>
          <div>
            <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">Data de Término</label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              className="mt-1 p-2 border rounded-md w-full"
              {...register("toDate", { required: true })}
            />
            {errors.toDate && <p className="text-red-500">Data de término é obrigatória</p>}
          </div>
        </div>
        <input
          type="text"
          name="location"
          placeholder="Localização"
          className="mt-1 p-2 border rounded-md w-full"
          {...register("location", { required: true })}
        />
        {errors.location && <p className="text-red-500">Localização é obrigatória</p>}
        <input
          type="text"
          name="participants"
          placeholder="Participantes"
          className="mt-1 p-2 border rounded-md w-full"
          {...register("participants")}
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

