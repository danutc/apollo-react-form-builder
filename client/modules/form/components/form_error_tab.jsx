import React from 'react';
import FormTextEditor from '../containers/form_text_editor.js';

var onErrorSnippets = 'function onError(errors) {\n\tconsole.log(errors);\n}\n';

class FormErrorTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormTextEditor id="form-error-editor" defaultValue={onErrorSnippets} type="onError" />
      </div>
    );
  }
}

export default FormErrorTab;
