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
  const [columnFilters, setColumnFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  return (
    <PlanetsContext.Provider
      value={ { planets,
        name,
        setName,
        planetsFilterName,
        setFilterName,
        planetsFilterNumeric,
        setFilterNumeric,
        columnFilters,
        setColumnFilter,
        setPlanets,
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
