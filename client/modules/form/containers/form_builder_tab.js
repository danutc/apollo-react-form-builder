import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FormBuilderTab from '../components/form_builder_tab.jsx';

var schema = {
  type: "object",
  required: ["title"],
  properties: {
  }
};

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  
  if (!LocalState.get('FORM_FIELDS')) {
    LocalState.set('FORM_FIELDS', {});
  }

  onData(null, {
    formFields: LocalState.get('FORM_FIELDS') 
  });
  
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FormBuilderTab);
