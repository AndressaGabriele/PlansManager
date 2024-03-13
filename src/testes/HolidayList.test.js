import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HolidayList from '../components/HolidayList';

describe('HolidayList component', () => {
  test('checks if holiday details are initially hidden', () => {
    render(<HolidayList holidays={[]} />);
    
    expect(screen.queryByText('Descrição das férias')).not.toBeInTheDocument();
    expect(screen.queryByText('Viagem para a montanha')).not.toBeInTheDocument();
  });

  test('calls edit holiday function when edit button is clicked', () => {
    const mockEditFunction = jest.fn();
    render(<HolidayList holidays={[{ title: 'Férias de Verão', description: 'Descrição das férias', date: '2024-07-15', location: 'Praia', participants: 'João, Maria' }, { title: 'Viagem de Inverno', description: 'Viagem para a montanha', date: '2024-12-20', location: 'Montanha', participants: 'Pedro, Ana' }]} onEditHoliday={mockEditFunction} />);
    
    fireEvent.click(screen.getAllByText('Editar')[0]);
    
    expect(mockEditFunction).toHaveBeenCalledWith(0);
  });

  test('calls delete holiday function when delete button is clicked', () => {
    const mockDeleteFunction = jest.fn();
    render(<HolidayList holidays={[{ title: 'Férias de Verão', description: 'Descrição das férias', date: '2024-07-15', location: 'Praia', participants: 'João, Maria' }, { title: 'Viagem de Inverno', description: 'Viagem para a montanha', date: '2024-12-20', location: 'Montanha', participants: 'Pedro, Ana' }]} onDeleteHoliday={mockDeleteFunction} />);
    
    fireEvent.click(screen.getAllByText('Excluir')[1]);
    
    expect(mockDeleteFunction).toHaveBeenCalledWith(1);
  });
});
