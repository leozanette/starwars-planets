import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilteredNumbers() {
  const { planetsFilterNumeric, setFilterNumeric,
    planetsFilterName, setFilterName } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const addNumericFilter = () => {
    const array = { filterByNumericValues: [
      ...planetsFilterNumeric.filterByNumericValues, { column, comparison, value },
    ],
    };
    setFilterNumeric(array);
  };

  useEffect(() => {
    planetsFilterNumeric.filterByNumericValues
      .forEach((elem) => {
        switch (elem.comparison) {
        case 'maior que':
          return setFilterName(planetsFilterName
            .filter((a) => (Number(a[elem.column]) > Number(elem.value)
            && a[elem.column] !== 'unknown')));
        case 'menor que':
          return setFilterName(planetsFilterName
            .filter((a) => Number(a[elem.column]) < Number(elem.value)));
        case 'igual a':
          return setFilterName(planetsFilterName
            .filter((a) => Number(a[elem.column]) === Number(elem.value)));
        default: return setFilterName(planetsFilterName);
        }
      });
  }, [planetsFilterNumeric]);

  return (
    <form>
      <label htmlFor="column-filter">
        Coluna
        <select
          type="select"
          id="column-filter"
          data-testid="column-filter"
          name="column-filter"
          value={ column }
          onChange={ (ev) => setColumn(ev.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador
        <select
          type="select"
          id="comparison-filter"
          data-testid="comparison-filter"
          name="comparison-filter"
          value={ comparison }
          onChange={ (ev) => setComparison(ev.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          name="value-filter"
          value={ value }
          onChange={ (ev) => setValue(ev.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addNumericFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilteredNumbers;
