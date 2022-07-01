import React, { Fragment } from "react";
import Header from '../Header/Header';
import Section from '../Section/Section';


function Layout() {
  return (
    <Fragment>
        <div className="layout">
            <Header />
            <Section />
        </div>
    </Fragment>
  );
}

export default Layout;