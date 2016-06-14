import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FormPlayground from '../components/form_playground.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  saveForm: actions.form_playground.saveForm,
  clearForm: actions.form_playground.clearForm,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FormPlayground);
