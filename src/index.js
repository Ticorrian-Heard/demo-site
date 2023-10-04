import React from 'react';
import reactDom from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

reactDom.render(
<React.Fragment>
    <Router>
    <Navbar />
     <Routes>
       <Route path="/" exact Component={Home} />
     </Routes>
 </Router>
 </React.Fragment>, document.getElementById('root'));
