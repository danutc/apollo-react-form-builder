import Wysiwyg from './custom_elements/wysiwyg.jsx'
import React from 'react'

// Widget definition 
var WysiwygWidget = (props) => {

  return React.createElement(Wysiwyg, {
    onChange: function onChange (event) {
      props.onChange(event.target.value)
    },
    value: props.value,
    required: props.required
  })
}

// Common properties for each object
var commonEditFormSchema = {
  type: 'object',
  title: 'General',
  properties: {
    label: { type: 'string', title: 'Label' },
    class: { type: 'string', title: 'Class' },
    defaultValue: { type: 'string', title: 'Default Value' },
    placeHolder: { type: 'string', title: 'Place Holder' },
    Hint: { type: 'string', title: 'Hint' }
  }
}

// element definition
const elements = {
  'input': {
    def: { type: 'string', title: 'Input' },
    edit: false,
    editSchema: commonEditFormSchema
  },

  'checkbox': {
    def: { type: 'boolean', title: 'Checkbox', default: false },
    edit: false,
    editSchema: commonEditFormSchema
  },
  'radio': {
    def: { type: 'boolean', title: 'Radio', default: false },
    ui: { 'ui:widget': 'radio' },
    edit: false,
    editSchema: commonEditFormSchema
  },
  'textarea': {
    def: { type: 'string', title: 'Textarea' },
    ui: { 'ui:widget': 'textarea' },
    edit: false,
    editSchema: commonEditFormSchema
  },
  'date': {
    def: { type: 'string', title: 'Date', format: 'date' },
    edit: false,
    editSchema: commonEditFormSchema
  },
  'datetime': {
    def: { type: 'string', title: 'Date Time', format: 'date-time' },
    edit: false,
    editSchema: commonEditFormSchema
  },
  'email': {
    def: { type: 'string', title: 'Email', format: 'email' },
    edit: false,
    editSchema: commonEditFormSchema
  },
  'uri': {
    def: { type: 'string', title: 'Uri', format: 'uri' },
    edit: false,
    editSchema: commonEditFormSchema
  },
  'wysiwyg': {
    def: { type: 'string', title: 'Wysiwyg' },
    ui: {
      'ui:widget': 'wysiwyg'
    },
    widget: {'wysiwyg': WysiwygWidget},
    edit: false,
    editSchema: commonEditFormSchema
  }
}

export default elements
