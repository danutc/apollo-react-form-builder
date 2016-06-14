import React from 'react';
import Form from "react-jsonschema-form";
import FormEditableField from '../containers/form_editable_field.js';
import elements from '../libs/form_elements.js';

class FormBuilderTab extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEditableField() {
    if (this.props.formFields) {
      return _.map(this.props.formFields, function (value, id) {

        if (value['ui'] && value['ui']['ui:widget'] === 'wysiwyg') {

          // mute the widget again cos the ReactDict does not allow to 
          // save the object
          value['ui']['ui:widget'] = elements['wysiwyg']['widget']['wysiwyg'];
          
          return (
            <FormEditableField key={id} id={id} uiSchema={value['ui']}
              schema={value['def']} edit={value['edit']} editSchema={value['editSchema']}
              />
          );
        }

        return (
          <FormEditableField key={id} id={id} uiSchema={value['ui']}
            schema={value['def']} edit={value['edit']} editSchema={value['editSchema']}
            />
        );

      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.renderEditableField() }
      </div>
    );
  }
}

export default FormBuilderTab;
