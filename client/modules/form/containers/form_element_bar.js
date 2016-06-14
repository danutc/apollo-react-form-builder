import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Component from '../components/form_element_bar.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  addElementToPlayground: actions.form_element_bar.addElementToPlayground,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
