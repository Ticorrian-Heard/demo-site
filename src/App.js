import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const App = () =>{
    return (
     <React.Fragment>
        <Router>
        <Navbar />
         <Routes>
           <Route path="/" exact Component={Home} />
         </Routes>
     </Router>
     </React.Fragment> 
    )
}

export default App
