import React from 'react';
import NavigationBar from './navigation_bar';

var items = [
  {
    title: "Administration", items: [
      { title: "Form Builder", type: "header" },
      { title: "Builder", name: "form-builder" }
    ]
  }
];

const Layout = ({content = () => null }) => (
  <div>
    <NavigationBar barItems={items} />
    <div className="container">
      <div className="wrapper">
        {content() }
      </div>
    </div>
  </div>
);

export default Layout;
