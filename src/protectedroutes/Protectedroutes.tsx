import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';


interface ProtectedRoutesProps {
  Components: React.ComponentType<any>; // Define Components prop as a React component type
}

const Protectedroutes: React.FC<ProtectedRoutesProps> = ({ Components }) => {
  const role = Cookies.get('role');
  const token = Cookies.get('token');

  return (
    <>
      {role === 'donor' && token ? <Components /> : <Navigate to="/" />} {/* Render Components or navigate to "/" based on role */}
    </>
  );
};

export default Protectedroutes;
