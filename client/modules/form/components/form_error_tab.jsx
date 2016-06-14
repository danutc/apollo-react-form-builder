import React from 'react';
import FormTextEditor from '../containers/form_text_editor.js';

class FormErrorTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormTextEditor id="form-error-editor" />
      </div>
    );
  }
}

export default FormErrorTab;
