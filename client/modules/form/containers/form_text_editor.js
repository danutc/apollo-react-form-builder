import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FormTextEditor from '../components/form_text_editor.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FormTextEditor);
