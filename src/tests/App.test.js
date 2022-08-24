import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlanetsProvider from '../context/PlanetsProvider'
import mocksPlanets from './mock';
import App from '../App';

describe('testando app', () => {
  test('I am your test', () => {
    render(<PlanetsProvider><App /></PlanetsProvider>);
    
    const column = screen.getByTestId("column-filter")
    expect(column).toBeInTheDocument();

    const comparison = screen.getByTestId("comparison-filter")
    expect(comparison).toBeInTheDocument();

    const value = screen.getByTestId("value-filter")
    expect(value).toBeInTheDocument();

    const name = screen.getByTestId("name-filter")
    expect(name).toBeInTheDocument();

  });

  test('I am your test', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mocksPlanets)
    })
    render(<PlanetsProvider><App /></PlanetsProvider>);
    fetch
    
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/'

    expect(fetch).toHaveBeenCalledWith(endPoint)

    const tatooine = await screen.findByText(/Tatooine/i)
    expect(tatooine).toBeInTheDocument();
 
    const planets = screen.getAllByTestId('planets')

    expect(planets).toHaveLength(10)

    const name = screen.getByTestId("name-filter")
    userEvent.type(name, 'Tato')

    const newPlanets = screen.getAllByTestId('planets')
    expect(newPlanets).toHaveLength(1)
    
    userEvent.clear(name)

    const newnewPlanets = screen.getAllByTestId('planets')
    expect(newnewPlanets).toHaveLength(10)



    const comparison = screen.getByTestId("comparison-filter")
    const value = screen.getByTestId("value-filter")
    const column = screen.getByTestId("column-filter")

    userEvent.type(column, 'population')
    userEvent.type(comparison, 'maior que')
    userEvent.type(value, '200000')

    const button = screen.getByTestId("button-filter")
    userEvent.click(button)

    const numericfilter = screen.getAllByTestId('planets')
    expect(numericfilter).toHaveLength(6)

  });

  test('I am your test', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mocksPlanets)
    })
    render(<PlanetsProvider><App /></PlanetsProvider>);
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    
    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    const filterBtn = screen.getByTestId("button-filter")
    const firstPlanet = await screen.findByText(/tatooine/i);
    expect(firstPlanet).toBeInTheDocument();
    userEvent.selectOptions(columnSelect, 'orbital_period');
    userEvent.selectOptions(comparisonSelect, 'menor que');
    userEvent.type(valueInput, '350');
    expect(firstPlanet).toBeInTheDocument();
    userEvent.click(filterBtn);
    expect(firstPlanet).not.toBeInTheDocument();
  });


  test('I am your test', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mocksPlanets)
    })
    render(<PlanetsProvider><App /></PlanetsProvider>);
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    
    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    const filterBtn = screen.getByTestId("button-filter")
    const firstPlanet = await screen.findByText(/tatooine/i);
    expect(firstPlanet).toBeInTheDocument();
    userEvent.selectOptions(columnSelect, 'orbital_period');
    userEvent.selectOptions(comparisonSelect, 'igual a');
    userEvent.type(valueInput, '350');
    expect(firstPlanet).toBeInTheDocument();
    userEvent.click(filterBtn);
    expect(firstPlanet).not.toBeInTheDocument();
  });
})