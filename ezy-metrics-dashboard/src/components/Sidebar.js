import React from 'react';
import '../styles.css';  // Corrected path to the CSS file

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>EzyMetrics</h2>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Leads</li>
                    <li>Analytics</li>
                    <li>Reports</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
