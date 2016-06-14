import React from 'react';

class FormPropertyBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div role="navigation">
        <ul className="nav nav-pills affix nav-stacked">
          <li role="presentation">
            <input type="text" className="form-control" placeholder="Class name"/>
          </li>

          <li role="presentation">
            <input type="text" className="form-control" placeholder="Default value"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default FormPropertyBar;
