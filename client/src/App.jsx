import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import News from './pages/News'
import Campaign from './pages/Campaign'
import About from './pages/About'
import Donate from './pages/Donate'
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import Dashnews from './pages/admin/Dashnews'
import Dashcampaign from './pages/admin/Dashcampaign'
import Dashgallery from './pages/admin/Dashgallery'
import Addnews from './pages/admin/Addnews'
import Addcampaign from './pages/admin/Addcampaign'
import Addgalery from './pages/admin/Addgalery'
import Editnews from './pages/admin/Editnews'
import Editcampaign from './pages/admin/Editcampaign'
import Editgallery from './pages/admin/Editgallery'
import Campaigndescription from './pages/Campaigndescription'
import Newsdescription from './pages/Newsdescription'
import Profile from './pages/admin/Profile'
const App = () => {
  return (
      <BrowserRouter>
         <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route exact path="/news"element={<News/>}/>
          <Route exact path="/contact"element={<Contact/>}/>
          <Route exact path="/campaign"element={<Campaign/>}/>
          <Route exact path="/about"element={<About/>}/>
          <Route exact path="/donate"element={<Donate/>}/>
          <Route exact path="/admin-login"element={<Login/>}/>
          <Route exact path="/admin"element={<Dashboard/>}/>
          <Route exact path="/admin-news"element={<Dashnews/>}/>
          <Route exact path="/admin-campaign"element={<Dashcampaign/>}/>
          <Route exact path="/admin-gallery"element={<Dashgallery/>}/>
          <Route exact path="/add-news"element={<Addnews/>}/>
          <Route exact path="/add-campaign"element={<Addcampaign/>}/>
          <Route exact path="/add-gallery"element={<Addgalery/>}/>
          <Route exact path="/edit-news/:id"element={<Editnews/>}/>
          <Route exact path="/edit-campaign/:id"element={<Editcampaign/>}/>
          <Route exact path="/edit-gallery/:id"element={<Editgallery/>}/>
          <Route exact path="/campaign-description/:id"element={<Campaigndescription/>}/>
          <Route exact path="/news-description/:id"element={<Newsdescription/>}/>
          <Route exact path="/profile"element={<Profile/>}/>
         </Routes>
      </BrowserRouter>
  )
}

export default App