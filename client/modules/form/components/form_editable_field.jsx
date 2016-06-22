import React from 'react';

import { Draggable, Droppable } from "react-drag-and-drop";
import Form from "react-jsonschema-form";
import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";
import ObjectField from "react-jsonschema-form/lib/components/fields/ObjectField";

function pickKeys(source, target) {
  const result = {};
  for (let key in source) {
    result[key] = target[key];
  }
  return result;
}

function shouldHandleDoubleClick(node) {
  // disable doubleclick on number input, so people can use inc/dec arrows
  if (node.tagName === "INPUT" && node.getAttribute("type") === "number") {
    return false;
  }

  return true;
}

class FieldPropertiesEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {submit, cancel, editSchema, change} = this.props;

    return (
      <div className="panel panel-default field-editor">
        <div className="panel-heading">
          <strong>Edit Field</strong>
          <button type="button" className="close-btn"
            onClick={cancel}>
            <i className="glyphicon glyphicon-remove-sign"/>
          </button>
        </div>
        <div className="panel-body">
          <Form
            onChange={change}
            schema={editSchema}
            onSubmit={submit} />
        </div>
      </div>
    );
  }
}

function DraggableFieldContainer(props) {
  const {
    children,
    dragData,
    onEdit,
    onDelete,
    onDoubleClick,
    onDrop
  } = props;

  return (
    <Draggable type="moved-field" data={dragData}>
      <Droppable types={["field", "moved-field"]}
        onDrop={onDrop}>
        <div className="row editable-field" onDoubleClick={onDoubleClick}>
          <div className="col-sm-10">
            {children}
          </div>
          <div className="col-sm-2 editable-field-actions btn-group">
            <button type="button" className="edit-btn" onClick={onEdit}>
              <i className="glyphicon glyphicon-edit"/>
            </button>
            <button type="button" className="delete-btn" onClick={onDelete}>
              <i className="glyphicon glyphicon-remove-sign"/>
            </button>
          </div>
        </div>
      </Droppable>
    </Draggable>
  );
}

export default class FormEditableField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, schema: props.schema };
  }

  _handleEdit(event) {
    event.preventDefault();
    var {editElement} = this.props;
    editElement(this.props['id']);
  }

  _handleUpdate(form) {
    var {updateElement} = this.props;
    updateElement(this.props['id'], form['formData']);
  }

  _handleDelete(event) {
    var {deleteElement} = this.props;
    if (confirm("Are you sure you want to delete this field?")) {
      deleteElement(this.props['id']);
    }
  }

  _handleCancel(event) {
    console.log('cancelling');
    var {closeEditing} = this.props;
    closeEditing(this.props.id);
  }

  _handleDrop(data) {
    const {name, swapFields, insertField} = this.props;
    if ("moved-field" in data && data["moved-field"]) {
      if (data["moved-field"] !== name) {
        swapFields(data["moved-field"], name);
      }
    } else if ("field" in data && data.field) {
      insertField(JSON.parse(data.field), name);
    }
  }

  render() {
    const props = this.props;

    if (this.props.edit) {
      return (
        <FieldPropertiesEditor
          {...props}
          submit={this._handleUpdate.bind(this) }
          cancel={this._handleCancel.bind(this) } />
      );
    }

    if (props.schema.type === "object") {
      if (!props.name) {
        var schema = { type: 'object', title: 'test', properties: { aa: { type: 'string,', title: 'aa' } } };
        // schema = {type: 'string', title: 'test'};

        // This can only be the root form object, returning a regular SchemaField.
        return <ObjectField {...props} schema={schema} idSchema={{ id: "test" }} onChange={() => console.log('onchange') }/>;
      }

      return (
        <DraggableFieldContainer
          dragData={props.name}
          onEdit={this._handleEdit.bind(this) }
          onDelete={this._handleDelete.bind(this) }
          onDoubleClick={this._handleEdit.bind(this) }
          onDrop={this._handleDrop.bind(this) }>
          <SchemaField {...props}
            SchemaField={SchemaField}
            schema={this.state.schema}
            idSchema={{ id: props.name }} />
        </DraggableFieldContainer>
      );
    }

    return (
      <DraggableFieldContainer
        draggableType="moved-field"
        droppableTypes={["moved-field", "field"]}
        dragData={props.name}
        onEdit={this._handleEdit.bind(this) }
        onDelete={this._handleDelete.bind(this) }
        onDoubleClick={this._handleEdit.bind(this) }
        onDrop={this._handleDrop.bind(this) }>
        <SchemaField {...props}
          idSchema={{ id: this.props.id }}
          uiSchema={this.props.uiSchema}
          schema={this.props.schema}
          />
      </DraggableFieldContainer>
    );
  }
}