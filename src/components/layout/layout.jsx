import React from 'react';
import MainNavigation from './main-navigation';

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <div>{props.children}</div>
    </>
  )
}

export default Layout