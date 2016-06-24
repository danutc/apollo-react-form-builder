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
    var {schema, ui, widgets, validation, onChange, onError} = this.props;

    var validateFn = eval(validation);
    var onChangeFn = eval(onChange);
    var onErrorFn = eval(onError);

    return (
      <div>
        <Form schema={schema} 
          onSubmit={(form) => { console.log(form)}}
          uiSchema={ui} 
          widgets={widgets}
          validate={validateFn}
          onChange={onChangeFn}
          onError={onChangeFn} 
        />
      </div>
    );
  }
}

export default FormPreviewTab;
