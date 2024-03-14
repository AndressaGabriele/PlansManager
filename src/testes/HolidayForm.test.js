/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import HolidayForm from "../components/HolidayForm";

describe("HolidayForm component", () => {
  test("validates required fields on form submission", async () => {
    const onAddHoliday = jest.fn();

    render(<HolidayForm onAddHoliday={onAddHoliday} />);

    await act(async () => {
      fireEvent.submit(screen.getByRole("button", { name: "Adicionar Plano de Férias" }));
    });

    expect(screen.getByText("Título é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Descrição é obrigatória")).toBeInTheDocument();
    expect(screen.getByText("Data de início é obrigatória")).toBeInTheDocument();
    expect(screen.getByText("Data de término é obrigatória")).toBeInTheDocument();
    expect(screen.getByText("Localização é obrigatória")).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    const onAddHoliday = jest.fn();

    render(<HolidayForm onAddHoliday={onAddHoliday} />);

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText("Título"), { target: { value: "Holiday Title" } });
      fireEvent.change(screen.getByPlaceholderText("Descrição"), { target: { value: "Holiday Description" } });
      fireEvent.change(screen.getByLabelText("Data de Início"), { target: { value: "2024-12-25" } });
      fireEvent.change(screen.getByLabelText("Data de Término"), { target: { value: "2025-01-01" } });
      fireEvent.change(screen.getByPlaceholderText("Localização"), { target: { value: "Holiday Location" } });
      fireEvent.change(screen.getByPlaceholderText("Participantes"), { target: { value: "John, Jane" } });

      fireEvent.submit(screen.getByRole("button", { name: "Adicionar Plano de Férias" }));
    });

    expect(screen.queryByText("Título é obrigatório")).toBeNull();
    expect(screen.queryByText("Descrição é obrigatória")).toBeNull();
    expect(screen.queryByText("Data de início é obrigatória")).toBeNull();
    expect(screen.queryByText("Data de término é obrigatória")).toBeNull();
    expect(screen.queryByText("Localização é obrigatória")).toBeNull();
  });
});
