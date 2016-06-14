import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import FormBuilderMain from './components/form_builder_main.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/form', {
    name: 'form-builder',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<FormBuilderMain />)
      });
      
      document.title = "Form";
    }
  });
}
