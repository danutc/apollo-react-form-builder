export default {
  editElement({LocalState}, id) {
    if (!id) {
      return LocalState.set(
        'CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', 'This field is not available in the form fields'
      )
    }

    LocalState.set('CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', null)

    var form_fields = LocalState.get('FORM_FIELDS')
    var element = form_fields[id]

    element['edit'] = true
    form_fields[id] = element
    LocalState.set('FORM_FIELDS', form_fields)
  },
  closeEditing({LocalState}, id) {
    if (!id) {
      return LocalState.set(
        'CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', 'This field is not available in the form fields'
      )
    }

    LocalState.set('CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', null)

    var form_fields = LocalState.get('FORM_FIELDS')
    var element = form_fields[id]

    element['edit'] = false
    form_fields[id] = element
    LocalState.set('FORM_FIELDS', form_fields)
  },
  deleteElement({LocalState}, id) {
    if (!id) {
      return LocalState.set(
        'CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', 'This field is not available in the form fields'
      )
    }

    LocalState.set('CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', null)

    var form_fields = LocalState.get('FORM_FIELDS')
    delete form_fields[id]
    LocalState.set('FORM_FIELDS', form_fields)
  },
  updateElement({LocalState}, id, params) {
    if (!id) {
      return LocalState.set(
        'CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', 'This field is not available in the form fields'
      )
    }

    LocalState.set('CANNOT_FIND_THIS_ID_IN_FORM_FIELDS', null)

    var form_fields = LocalState.get('FORM_FIELDS')

    var element = form_fields[id]
    console.log('updating')

    console.log(params)
    console.log(element)

    element['ui'] = element['ui'] || {}
    if (params && params['label']) {
      element['def']['title'] = params['label']
    }

    if (params && params['class']) {
      element['ui']['classNames'] = params['class']
    }

    if (params && params['defaultValue']) {
      element['def']['default'] = params['defaultValue']
    }

    if (params && params['hint']) {
      element['ui']['ui:help'] = params['hint']
    }

    if (params && params['placeHolder']) {
      element['def']['description'] = params['placeHolder']
    }

    element['edit'] = false
    form_fields[id] = element

    LocalState.set('FORM_FIELDS', form_fields)
  }
}
