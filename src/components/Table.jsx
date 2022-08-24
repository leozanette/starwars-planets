import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planetsFilterName, setPlanets,
    setFilterName } = useContext(PlanetsContext);
  useEffect(() => {
    const getPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const getData = await fetch(endPoint);
      const dataPlanets = await getData.json();
      return dataPlanets;
    };

    const filtered = async () => {
      const { results } = await getPlanets();
      results.forEach((a) => delete a.residents);
      setPlanets(results);
      setFilterName(results);
    };
    filtered();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Gravity</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Surface Water</th>
            <th>Diameter</th>
            <th>Created</th>
            <th>Films</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {planetsFilterName.map((planet) => (
            <tr
              key={ planet.name }
              data-testid="planets"
            >
              <th>{ planet.name }</th>
              <th>{ planet.climate }</th>
              <th>{ planet.terrain }</th>
              <th>{ planet.gravity }</th>
              <th>{ planet.population }</th>
              <th>{ planet.rotation_period }</th>
              <th>{ planet.orbital_period }</th>
              <th>{ planet.surface_water }</th>
              <th>{ planet.diameter }</th>
              <th>{ planet.created }</th>
              <th>{ planet.films }</th>
              <th>{ planet.edited }</th>
              <th>{ planet.url }</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>PLanets</h2>
    </>
  );
}

export default Table;
