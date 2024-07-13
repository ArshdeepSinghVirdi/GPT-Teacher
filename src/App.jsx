import React from 'react'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';
import TryNowPage from './Pages/TryNowPage';
import AfterUploadPage from './Pages/AfterUploadPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trynow" element={<TryNowPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/afterupload" element={<AfterUploadPage />} />
      </Routes>
    </Router>
  )
}

export default App









//import RibinForBusinessPage from './Pages/RibinForBusinessPage'
//import PartnerWithUsPage from './Pages/PartnerWithUsPage';
{/* <Route path="/ribinforbusiness" element={<RibinForBusinessPage />} />
        <Route path="/partnerwithus" element={<PartnerWithUsPage />} /> */}