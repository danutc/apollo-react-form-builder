import React from 'react';
import Form from "react-jsonschema-form";

import FormPropertyBar from './form_property_bar.jsx';

import FormElementBar from '../containers/form_element_bar.js';
import FormPlayground from '../containers/form_playground.js';

class FormBuilderMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="col-md-2">
          <FormElementBar />    
        </div>
        <div className="col-md-10">
          <FormPlayground />
        </div>
      </div>
    );
  }
}

export default FormBuilderMain;
