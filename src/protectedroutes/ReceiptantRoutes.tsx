
import { Outlet,Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const ReceiptantRoutes = () => {
  const role = Cookies.get("role");
  return (
    <>
    {role==='recipient'?<Outlet/>:<Navigate to='/login'/>}
    
    </>
  )
}

export default ReceiptantRoutes