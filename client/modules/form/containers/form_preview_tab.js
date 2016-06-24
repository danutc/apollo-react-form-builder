import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core'

import FormPreviewTab from '../components/form_preview_tab.jsx'
import elements from '../libs/form_elements.js'

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context()

  var finalForm = LocalState.get('FINAL_FORM_ENTITY');

  finalForm = finalForm || {};

  var form_fields = LocalState.get('FORM_FIELDS')
  var schema = {
    type: 'object',
    properties: {}
  }

  var ui = {}
  var widgets = {}

  for (var key in form_fields) {
    ui[key] = form_fields[key]['ui']
    schema['properties'][key] = form_fields[key]['def']

    // becareful, can override the other one
    if (form_fields[key]['ui']) {
      var widgets = form_fields[key]['widget']
      var widgetName = form_fields[key]['ui']['ui:widget']
      var widgetCollection = widgets ? elements[widgetName]['widget'] : {}

      widgets = _.extend(widgets, widgetCollection)
    }
  }

  finalForm['schema'] = schema;
  finalForm['ui'] = ui;
  finalForm['widgets'] = widgets;

  // save to the state so we can get it for the other action like save 
  LocalState.set('FINAL_FORM_ENTITY', finalForm)

  onData(null, LocalState.get('FINAL_FORM_ENTITY'))
}

export const depsMapper = (context, actions) => ({
  context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FormPreviewTab)
