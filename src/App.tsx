
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './LandingPage/Home/Home';
import Aboutus from './LandingPage/Aboutus/Aboutus';
import Mission from './LandingPage/Mission/Mission';
import Login from './UserRegistration/Login/Login';
import Signup from './UserRegistration/Signup/Signup';
import Donor from './UserDashboard/Donor/Donor';
import ScheduleNewDonations from './UserDashboard/Donor/ScheduleNewDonations';
import ViewDonationHistory from './UserDashboard/Donor/ViewDonationHistory';
import UpdatePersonalInformation from './UserDashboard/Donor/UpdatePersonalInformation';
import Admin from './UserDashboard/Admin/Admin';
import Managebloodinventory from './UserDashboard/Admin/Managebloodinventory';
import ManageReceiptant from './UserDashboard/Admin/ManageReceiptant';
import Receiptantrequest from './UserDashboard/Admin/Receiptantrequest';
import Header from './Components/Header';
import Bgbubble from './Components/Bgbubble';
import Layout from './Layout/Layout';
import AdminRoutes from './protectedroutes/AdminRoutes';
import DonorRoutes from './protectedroutes/DonorRoutes';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutWithHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        
        <Route  element={<AdminRoutes />}>
      

        <Route path="/admin" element={<Admin />} />
          <Route path="/manage-blood-inventory" element={<Managebloodinventory />} />
          <Route path="/manage-receiptant" element={<ManageReceiptant />} />
          <Route path="/receiptant-request" element={<Receiptantrequest />} />

         
        </Route>

        <Route  element={<DonorRoutes />}>
          <Route path="/donor" element={<Donor/>} />
          <Route path="/schedule" element={<ScheduleNewDonations />} />
          <Route path="/history" element={<ViewDonationHistory email={''}/>} />
          <Route path="/update" element={<UpdatePersonalInformation userid={""} />} />
        </Route>

        {/* <Route element={<RecipientRoutes />}>
          <Route path="/recipient" element={<Rece/>} />
          {/* Add more recipient-specific routes here */}
        {/* </Route> */} */
      </Routes>
    </Router>
  );
};

const LayoutWithHeader = () => {
  return (
    <>
      <Header />
      <Layout>
        <Bgbubble />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
