import React from 'react';
import FormTextEditor from '../containers/form_text_editor.js';

class FormValidationTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FormTextEditor id="form-validation-editor"/>;
  }
}

export default FormValidationTab;
