import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles.css';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Performance Metrics',
                data: [65, 59, 80, 81, 56],
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="widget">
                <Line data={data} />
            </div>
        </div>
    );
};

export default Dashboard;
