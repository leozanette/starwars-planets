import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilteredName() {
  const { name, setName, planets, setFilterName } = useContext(PlanetsContext);

  useEffect(() => {
    const filter = planets.filter((e) => e.name.includes(name));
    setFilterName(filter);
  }, [name]);

  return (
    <label htmlFor="nameInput">
      Filtro
      <input
        type="text"
        id="nameInput"
        data-testid="name-filter"
        name="name"
        value={ name }
        onChange={ (ev) => setName(ev.target.value) }
      />
    </label>
  );
}

export default FilteredName;
