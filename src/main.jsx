import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import HomePage from './Pages/HomePage/HomePage.jsx';
import AuthPage from './Pages/AuthPage/AuthPage.jsx';
import PageLayout from './Layouts/PageLayouts/PageLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </PageLayout>
    </Router>
  </React.StrictMode>
);
