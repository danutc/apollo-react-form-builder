import elements from '../libs/form_elements.js';

export default {
  addElementToPlayground({LocalState}, element) {
    if (!element || !elements[element]) {
      return LocalState.set('CANNOT_ADD_ELEMENT_TO_PLAYGROUND', 'This element is not available');
    }

    LocalState.set('CANNOT_ADD_ELEMENT_TO_PLAYGROUND', null);

    var form_fields = LocalState.get('FORM_FIELDS');
    var seed = new Date().getTime();
    
    form_fields['Input_' + seed] = elements[element];

    LocalState.set('FORM_FIELDS', form_fields);
  }
}