export default {
  saveForm({LocalState}) {
    var FINAL_FORM_ENTITY = LocalState.get('FINAL_FORM_ENTITY');
    console.log(FINAL_FORM_ENTITY);
    alert(FINAL_FORM_ENTITY);
  },
  clearForm({LocalState}) {
    if (confirm('Are you sure you want to clear all the fields ?')) {
      LocalState.set('FORM_FIELDS', {});  
    }
  }
}