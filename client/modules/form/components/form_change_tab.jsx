import React from 'react';
import FormTextEditor from '../containers/form_text_editor.js';

class FormChangeTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormTextEditor id="form-change-editor" />
      </div>
    );
  }
}

export default FormChangeTab;
