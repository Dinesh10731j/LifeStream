import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface ProtectedRoutesProps {
  Component: React.ComponentType<any>;
  scheduleComponent: React.ComponentType<any>;
  viewHistoryComponent: React.ComponentType<any>;
  updatePersonalInformation:React.ComponentType<any>;
}

const Protectedroutes: React.FC<ProtectedRoutesProps> = ({
  Component,
  scheduleComponent,
  viewHistoryComponent,
  updatePersonalInformation
  
}) => {
  const role = Cookies.get('role');

  if (role !== 'donor') {
    return <Navigate to="/login" />;
  }

  return <Component scheduleComponent={scheduleComponent} viewHistoryComponent={viewHistoryComponent} updateInfoComponent={updatePersonalInformation} />;
};

export default Protectedroutes;
