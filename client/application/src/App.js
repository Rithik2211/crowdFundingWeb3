import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, CampaignDetails, CreateCampaign, Profile} from './pages/index';
import ResponsiveAppBar from './components/CustomNavBar';

function App() {
  return (
    <div >
    <Router>
      <ResponsiveAppBar/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/CampaignDetails'} element={<CampaignDetails/>}></Route>
        <Route path={'/CreateCampaign'} element={<CreateCampaign/>}></Route>
        <Route path={'/Profile'} element={<Profile/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
