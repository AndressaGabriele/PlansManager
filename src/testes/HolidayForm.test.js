import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HolidayForm from '../components/HolidayForm';

describe('HolidayForm component', () => {
  test('validates required fields on form submission', () => {
    render(<HolidayForm />);
    
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar Plano de Férias' }));
    
    expect(screen.getByText('Data inválida. Por favor, insira uma data válida.')).toBeInTheDocument();
  });
  
  test('submits form with valid data', () => {
    const mockSubmit = jest.fn();
    render(<HolidayForm onAddHoliday={mockSubmit} />);
    
    fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Holiday Title' } });
    fireEvent.change(screen.getByPlaceholderText('Descrição'), { target: { value: 'Holiday Description' } });
    fireEvent.change(screen.getByPlaceholderText('Data'), { target: { value: '2024-12-25' } });
    fireEvent.change(screen.getByPlaceholderText('Localização'), { target: { value: 'Holiday Location' } });
    fireEvent.change(screen.getByPlaceholderText('Participantes'), { target: { value: 'John, Jane' } });
    
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar Plano de Férias' }));
    
    expect(mockSubmit).toHaveBeenCalledWith({
      title: 'Holiday Title',
      description: 'Holiday Description',
      date: '2024-12-25',
      location: 'Holiday Location',
      participants: 'John, Jane'
    });
  });
});
