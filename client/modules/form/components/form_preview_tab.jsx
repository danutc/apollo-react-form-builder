import React from 'react';
import Form from "react-jsonschema-form";

class FormPreviewTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form schema={this.props.schema} uiSchema={this.props.ui} widgets={this.props.widgets} />
      </div>
    );
  }
}

export default FormPreviewTab;
