import React from 'react';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  _navigateToPage(page) {
    FlowRouter.go(page);
  }

  renderBarItem(items) {
    var _this = this;

    return items.map(function (doc, idx) {
      if (doc['type']) {
        if (doc['type'] == 'header') {
          return (<li key={idx} className="dropdown-header">{doc['title']}</li>);
        } else if (doc['type'] == 'divider') {
          return (<li key={doc['title']} role="separator" className="divider"></li>);
        }
      } else if (doc['items']) {
        return (
          <li key={idx} className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"
              role="button" aria-haspopup="true"
              aria-expanded="false">
              {doc['title']} <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              {_this.renderBarItem(doc['items']) }
            </ul>
          </li>
        );
      } else {
        return (
          <li key={idx}>
            <a href="#" onClick={() => { _this._navigateToPage(doc['name']) } }>
              {doc['title']}
            </a>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"  data-target="#navbar"
              aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Clearbridge</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.renderBarItem(this.props.barItems) }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="../navbar-static-top/">Thai Tran</a></li>
            </ul>
          </div>{/*/.nav-collapse */}
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
