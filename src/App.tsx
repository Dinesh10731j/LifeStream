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

const App = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Bgbubble />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/mission" element={<Mission />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* Example of protected route for donor dashboard */}
          <Route path='/donor' element={<Protectedroutes Components={Donor} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
