import React from 'react';

import FormBuilderTab from '../containers/form_builder_tab.js';
import FormPreviewTab from '../containers/form_preview_tab.js';
import FormValidationTab from '../containers/form_validation_tab.js';
import FormChangeTab from '../containers/form_change_tab.js';
import FormErrorTab from '../containers/form_error_tab.js';

class FormPlayground extends React.Component {
  constructor(props) {
    super(props);
    this._onChangeFromEditor = this._onChangeFromEditor.bind(this);
  }

  _saveForm(event) {
    var {saveForm} = this.props
    saveForm()
  }

  _clearForm(event) {
    var {clearForm} = this.props
    clearForm()
  }

  _onChangeFromEditor(type, value) {
    var {saveFromEditor} = this.props
    console.log(type)
    console.log(value)

    saveFromEditor(type, value)
  }

  render() {
    return (
      <div>
        <div className="btn-group form-builder-menu pull-right" role="group" aria-label="...">
          <button type="button" className="btn btn-success" onClick={this._saveForm.bind(this) }>Save</button>
          <button type="button" className="btn btn-info">Open</button>
          <button type="button" className="btn btn-danger" onClick={this._clearForm.bind(this) }>Clear</button>
        </div>

        <ul className="nav nav-tabs" id="myTab">
          <li className="active"><a href="#" data-target="#builder" data-toggle="tab">Form Builder</a></li>
          <li><a href="#" data-target="#validation" data-toggle="tab">On Validation</a></li>
          <li><a href="#" data-target="#change" data-toggle="tab">On Change</a></li>
          <li><a href="#" data-target="#error" data-toggle="tab">On Error</a></li>
          <li><a href="#" data-target="#preview" data-toggle="tab">Preview</a></li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active" id="builder">
            <FormBuilderTab />
          </div>
          <div className="tab-pane" id="validation">
            <FormValidationTab onChange={this._onChangeFromEditor}/>
          </div>
          <div className="tab-pane" id="change">
            <FormChangeTab onChange={this._onChangeFromEditor}/>
          </div>
          <div className="tab-pane" id="error">
            <FormErrorTab onChange={this._onChangeFromEditor}/>
          </div>
          <div className="tab-pane" id="preview">
            <FormPreviewTab />
          </div>
        </div>
      </div>
    )
  }
}

export default FormPlayground;
