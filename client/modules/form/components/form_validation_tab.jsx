import React from 'react';
import FormTextEditor from '../containers/form_text_editor.js';

var validateSnippets = 'function validate(formData, errors) {\n\tif (formData.pass1 !== formData.pass2) {\n\t\terrors.pass2.addError("Passwords don\'t match");\n\t}\n\treturn errors;\n}\n';

class FormValidationTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FormTextEditor id="form-validation-editor" defaultValue={validateSnippets} type="validation" />;
  }
}

export default FormValidationTab;
