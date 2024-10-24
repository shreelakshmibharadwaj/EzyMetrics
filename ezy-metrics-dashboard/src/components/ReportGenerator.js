import React from 'react';
import '../styles.css';  // Corrected path to the CSS file

const ReportGenerator = () => {
    const generateReport = (format) => {
        alert(`Generating ${format} report...`);
    };

    return (
        <div className="report-generator">
            <h2>Report Generator</h2>
            <button onClick={() => generateReport('PDF')}>Generate PDF</button>
            <button onClick={() => generateReport('CSV')}>Generate CSV</button>
        </div>
    );
};

export default ReportGenerator;
