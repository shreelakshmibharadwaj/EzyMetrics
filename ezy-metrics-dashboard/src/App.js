import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LeadManagement from './components/LeadManagement';
import ReportGenerator from './components/ReportGenerator';
import './styles.css';

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <Dashboard />
                <LeadManagement />
                <ReportGenerator />
            </div>
        </div>
    );
};

export default App;

