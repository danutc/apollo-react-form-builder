import React from 'react';
import Form from "react-jsonschema-form";

//--------------------------------------------------------------------------------
// Preview tab component
//--------------------------------------------------------------------------------
class FormPreviewTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form schema={this.props.schema} onSubmit={(form) => { console.log(form) } }uiSchema={this.props.ui} widgets={this.props.widgets} />
      </div>
    );
  }
}

export default FormPreviewTab;
