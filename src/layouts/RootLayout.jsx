import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Cosmic Encyclopedia</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="black-holes">Black Holes</NavLink>
                    <NavLink to="milky-way">The Milky Way</NavLink>
                    <NavLink to="constellations">Constellations</NavLink>

                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}