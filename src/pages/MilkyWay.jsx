import { useState, useEffect } from "react"
import PlanetsObject from "../data/PlanetsObject"
//
import { Outlet, Link } from "react-router-dom";

export default function MilkyWay() {
    const [planets, setPlanets] = useState(PlanetsObject);

    return (
        <div>
            <h1>The Milky Way</h1>
            <p>The Milky Way is the galaxy we call home, a vast spiral of stars, gas, and dust. Discover its structure, how it moves through space, and what makes our galactic neighborhood so unique.</p>
            <img
                src="https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A galaxy in space"
                style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }}
            />
            {
                planets.map((planet) => {
                    return (
                        <div key={planet.id} style={{ border: "1px solid cyan", marginBottom: "5px", padding: "1em" }}>
                            <div>Name: {planet.name}</div>
                            <Link to={planet.name}>Show Details</Link>
                        </div>
                    )
                })
            }
            <Outlet />
        </div>


    )
}