import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import ScrollProgress from './Components/ScrollProgress';
import BackToTop from './Components/BackToTop';

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Outlet />
      <BackToTop />
    </>
  );
};

export default RootLayout;
