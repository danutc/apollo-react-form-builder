import React from 'react';
import FormTextEditor from '../containers/form_text_editor.js';

var onChangeSnippets = 'function onChange(event) {\n\tconsole.log(event.target.value);\n}\n';

class FormChangeTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormTextEditor id="form-change-editor" defaultValue={onChangeSnippets} />
      </div>
    );
  }
}

export default FormChangeTab;
