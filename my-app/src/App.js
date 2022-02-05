import React from 'react';
import GlobalStyle from './globalStyle';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';
import SearchPage from './pages/search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/images" element={<SearchPage/>} />
            <Route path="/news" element={<SearchPage/>} />
            <Route path="/videos" element={<SearchPage/>} />
        </Routes>

        <GlobalStyle/>
      </Router>
    </div>
  );
}

export default App;
