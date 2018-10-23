import React from 'react';
import ReactDom from 'react-dom';

class Gallery extends React.Component {
  render() {
    return(<div>Hello World</div>)
  }
}

ReactDom.render(<Gallery/>, document.getElementById('gallery'))