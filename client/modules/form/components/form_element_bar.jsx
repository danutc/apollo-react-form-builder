import React from 'react';

class FormElementBar extends React.Component {
  constructor(props) {
    super(props);
  }

  _addElementToPlayground(element) {
    const {addElementToPlayground} = this.props;
    addElementToPlayground(element);
  }

  render() {
    return (
      <div role="navigation">
        <div className="panel panel-default">
          <div className="panel-heading">Widgets</div>
          <div className="list-group">
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'block') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Block
              </a>
            </div>
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'input') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Input
              </a>
            </div>
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'checkbox') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Checkbox
              </a>
            </div>
            
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'radio') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Radio
              </a>
            </div>
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'textarea') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Text Area
              </a>
            </div>
            
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'date') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Date
              </a>
            </div>
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'email') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Email
              </a>
            </div>
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'uri') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Uri
              </a>
            </div>
            
            <div role="presentation" className="list-group-item field-list-entry">
              <a href="#" onClick={this._addElementToPlayground.bind(this, 'wysiwyg') }>
                <i className="fa fa-plus-square" aria-hidden="true"></i> Wysiwyg
              </a>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default FormElementBar;
