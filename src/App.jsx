
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Dashboard from './Host/Dashboard'
import Reviews from './Host/Reviews'
import Income from './Host/Income'
import HostLayout from './components/HostLayout'
import HostVans from './Host/HostVans'
import HostVanDetail from './pages/HostVanDetail'
import HostVanInfo from './Host/HostVanInfo'
import HostVanPricing from './Host/HostVanPricing'
import HostVanPhotos from './Host/HostVanPhotos'

import "./server"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="vans" element={<Vans/>}/>
            <Route path="vans/:id" element={<VanDetails/>}/>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
