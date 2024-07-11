import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bgbubble from "../../Components/Bgbubble";
import Sidenav from "../../sidenavlayout/sidenav";

interface DonorProps {
  scheduleComponent: React.ComponentType<any>;
  viewHistoryComponent: React.ComponentType<any>;
  updateInfoComponent: React.ComponentType<any>; // Add the prop type for updateInfoComponent
}

const Donor: React.FC<DonorProps> = ({
  scheduleComponent: ScheduleNewDonations,
  viewHistoryComponent: ViewDonationHistory,
  updateInfoComponent: UpdatePersonalInformation, // Destructure the prop
}) => {
  return (
    <>
      <Bgbubble />
      <section>
        <Sidenav userid={''} />
        <div className="ml-72 p-4"> {/* Adjust this based on your layout */}
          <Routes>
            <Route path="/viewdonationhistory" element={<ViewDonationHistory />} />
            <Route path="/schedulenewdonations" element={<ScheduleNewDonations />} />
            <Route path="/updatepersonalinformation" element={<UpdatePersonalInformation />} /> {/* Add the route */}
          </Routes>
        </div>
      </section>
    </>
  );
};

export default Donor;
