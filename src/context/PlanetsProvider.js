import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [planetsFilterName, setFilterName] = useState([]);
  const [planetsFilterNumeric, setFilterNumeric] = useState(
    { filterByNumericValues: [] },
  );

  const getPlanets = async () => {
    const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getData = await fetch(endPoint);
    const dataPlanets = await getData.json();
    dataPlanets.results.forEach((a) => delete a.residents);
    setPlanets(dataPlanets.results);
    setFilterName(dataPlanets.results);
  };

  return (
    <PlanetsContext.Provider
      value={ { planets,
        getPlanets,
        name,
        setName,
        planetsFilterName,
        setFilterName,
        planetsFilterNumeric,
        setFilterNumeric,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
