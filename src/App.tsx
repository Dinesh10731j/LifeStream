import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bgbubble from './Components/Bgbubble';
import Home from './LandingPage/Home/Home';
import Aboutus from './LandingPage/Aboutus/Aboutus';
import Layout from './Layout/Layout';
import Mission from './LandingPage/Mission/Mission';
import Login from './UserRegistration/Login/Login';
import Header from './Components/Header';
import Signup from './UserRegistration/Signup/Signup';
import Donor from './UserDashboard/Donor/Donor';
import Protectedroutes from './protectedroutes/Protectedroutes';
import ScheduleNewDonations from './UserDashboard/Donor/ScheduleNewDonations';
import ViewDonationHistory from './UserDashboard/Donor/ViewDonationHistory';
import UpdatePersonalInformation from './UserDashboard/Donor/UpdatePersonalInformation';

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
        <Route
          path="/donor/*"
          element={
            <Protectedroutes
              Component={Donor}
              scheduleComponent={ScheduleNewDonations}
              viewHistoryComponent={ViewDonationHistory}
              updatePersonalInformation={UpdatePersonalInformation}
            />
          }
        />
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
