import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';


class FormTextEditor extends React.Component {
  constructor(props) {
    super(props);

  }

  _onClick() {
    var {onChange} = this.props;
    onChange(this.data['type'], this.data['value'])
  }

  _onChange(type, value) {

    console.log(type);
    console.log(value);

    this.data = {};
    this.data['type'] = type;
    this.data['value'] = value;
  }

  render() {
    var {defaultValue, onChange, type} = this.props;

    return (
      <div>
        <div className="row">
          <AceEditor
            mode="javascript"
            theme="github"
            value={defaultValue}
            onChange={(value) => { this._onChange(type, value) } }
            name={this.props.id}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="row">
          <button onClick={() => this._onClick()} className="btn btn-info pull-right">Save</button>
        </div>
      </div>
    );
  }
}

export default FormTextEditor;
