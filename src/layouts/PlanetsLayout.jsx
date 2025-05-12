import { Outlet, NavLink } from "react-router-dom";
import BackButton from "../BackButton";

export default function PlanetsLayout() {
    return (
        <div className="planets-layout">
            <header>
                <nav>
                    <h2>Planets of the Milky Way Galaxy</h2>
                    {/* <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="black-holes">Black Holes</NavLink>
                    <NavLink to="milky-way">The Milky Way</NavLink>
                    <NavLink to="constellations">Constellations</NavLink> */}

                </nav>
            </header>
            <main>
                <BackButton />
                <Outlet />
            </main>
        </div>
    )
}