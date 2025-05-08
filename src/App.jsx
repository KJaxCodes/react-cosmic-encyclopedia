import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import BlackHoles from './pages/BlackHoles'
import MilkyWay from './pages/MilkyWay'
import Constellations from './pages/Constellations'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="black-holes" element={<BlackHoles/>} />
      <Route path="milky-way" element={<MilkyWay/>} />
      <Route path="constellations" element={<Constellations/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
