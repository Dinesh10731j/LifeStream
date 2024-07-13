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
  updateInfoComponent: UpdatePersonalInformation,
}) => {
  return (
    <>
      <Bgbubble />
      <section>
        <Sidenav userid={''} />
        <div className=" ml-15 p-7 md:ml-60"> 
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
