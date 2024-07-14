
import Cookies from 'js-cookie';
import { Outlet,Navigate } from 'react-router-dom';
const DonorRoutes = () => {
  const role = Cookies.get("role");
  console.log(role)
  return (
    <>
     {role==="donor"?<Outlet/>:<Navigate to='/login'/>}
    </>
   
  )
}

export default DonorRoutes