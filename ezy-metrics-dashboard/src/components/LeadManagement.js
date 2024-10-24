import React from 'react';
import leads from '../data/leads';
import '../styles.css';  // Corrected path to the CSS file

const LeadManagement = () => {
    return (
        <div className="lead-management">
            <h2>Lead Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Add Lead</button>
        </div>
    );
};

export default LeadManagement;
