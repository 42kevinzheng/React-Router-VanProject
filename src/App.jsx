
import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vansLoader }from './pages/Vans'
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
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login from './pages/Login'

import "./server"


function App() {

const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/'element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
                <Route
      path="login"
      element={<Login />}
    />
            <Route path="vans" element={<Vans/>} loader= {vansLoader }  errorElement={<Error />} />
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
            <Route path="*" element={<NotFound />}/>
          </Route>
))



  return (
     <RouterProvider router={router} />

  )
}

export default App
