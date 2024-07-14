
import Cookies from 'js-cookie';
import { Outlet,Navigate } from 'react-router-dom';
const AdminRoutes = () => {
    const role = Cookies.get("role");
    console.log(role)
  return (
    <>
      {role==="admin"?<Outlet/>:<Navigate to='/login'/>}
    </>

  )
}

export default AdminRoutes