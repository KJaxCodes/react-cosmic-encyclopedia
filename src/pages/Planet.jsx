import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlanetsObject from "../data/PlanetsObject";

export default function Planet() {
    const [planetData, setPlanetData] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (params.name) {
            const selectedPlanet = PlanetsObject.filter((planet => planet.name === params.name))[0];
            if (selectedPlanet) {
                setPlanetData({ ...selectedPlanet });
            }
        }
    }, [params.name]);

    return (
        <div>
            {
                planetData ?
                    <div>
                        <h2>{planetData.name}</h2>
                        <p>Description: {planetData.description}</p>
                        <p>Atmosphere: {planetData.atmosphere}</p>
                        <p>Distance from Sun: {planetData.distance}</p>
                        <p>Moons: {planetData.moons}</p>
                        <p>Gravity: {planetData.gravity}</p>
                        <p>Temperature: {planetData.temperature}</p>
                        <p>Habitable: {planetData.habitable.toString()}</p>
                    </div>
                    :
                    <div>
                        Loading Planet Data
                    </div>
            }
        </div>
    );
}