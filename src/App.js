import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';

import * as ROUTES from './constants/routes'; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/browse" element={<Browse />}>
        </Route>
        <Route exact path="/signin" element={<Signin />}>
        </Route>
        <Route exact path="/signup" element={<Signup />}>
        </Route>
        <Route exact path={ROUTES.HOME} element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}
