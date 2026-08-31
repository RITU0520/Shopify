import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Class1 from './class1';
import C2f from './C2f';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<App />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
    {/* <Header />
    <Footer /> */}
    {/* <App />
    <Class1 />
    <C2f/>
     */}
  </React.StrictMode>
);
