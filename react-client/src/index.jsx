import React from 'react';
import ReactDom from 'react-dom';

const TEST_IMAGE_URL = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/t9QmCD4rQEmdqhiXUZPN_AI7B6379%20copy.jpg?auto=format&fm=jpg&fit=crop&w=800&h=242.42424242424244&bg=f0f0f0&q=38&dpr=2'
class Gallery extends React.Component {
  render() {
    return(<div><img src={TEST_IMAGE_URL}></img></div>)
  }
}

ReactDom.render(<Gallery/>, document.getElementById('gallery'))