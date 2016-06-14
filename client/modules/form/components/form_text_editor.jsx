import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';


class FormTextEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="github"
          onChange={() => { console.log('test'); } }
          name={this.props.id}
          editorProps={{ $blockScrolling: true }}
          />
      </div>
    );
  }
}

export default FormTextEditor;
