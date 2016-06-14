import {Forms} from '/lib/collections';

class FormService {
  save(form) {
    var id = Forms.insert(form);

    return {code: 200, type: "SUCCESS", content: `{id: '${id}'}`}
  }
}

export default FormService;