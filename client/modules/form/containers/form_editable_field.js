import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FormEditableField from '../components/form_editable_field.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => {
  return {
    closeEditing: actions.form_editable_field.closeEditing,
    editElement: actions.form_editable_field.editElement,
    deleteElement: actions.form_editable_field.deleteElement,
    updateElement: actions.form_editable_field.updateElement,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FormEditableField);
