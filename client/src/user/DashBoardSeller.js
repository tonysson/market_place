import React from 'react';
import ConnectNav from '../components/ConnectNav';
import DashboardNav from '../components/DashboardNav';


const DashBoardSeller = () => {
    return (
        <>
             <>
            <div className="container-fluid p-5">
               <ConnectNav/>
            </div>
            <div className="container-fluid p-4">
                <DashboardNav/>
            </div>
            <div className="container">
                <p>
                    Show all the hotels and user have posted and button to add new
                </p>
            </div>
        </>
        </>
    )
}

export default DashBoardSeller
