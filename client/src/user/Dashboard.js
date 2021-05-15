import React from 'react';
import ConnectNav from '../components/ConnectNav';
import DashboardNav from '../components/DashboardNav';


const Dashboard = () => {
    return (
        <>
            <div className="container-fluid p-5">
               <ConnectNav/>
            </div>
            <div className="container-fluid p-4">
                <DashboardNav/>
            </div>
            <div className="container-fluid">
                <p>
                    Show all bookings and button to browse
                </p>
            </div>
        </>
    )
}

export default Dashboard
