import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import Gallery from './components/Gallery.jsx';
import ProductGallery from './components/ProductGallery.jsx';

const SAMPLE_IMG = 'https://www.cats.org.uk/uploads/branches/1/42847%20Cats%20Weekly%20Lottery%20Web%20Banner.jpg'

class GalleryContainer extends React.Component {
  render() {
    return(<div>
            {/* <Gallery src={SAMPLE_IMG}/> */}
            <ProductGallery/>
          </div>)
  }
}

ReactDom.render(<GalleryContainer/>, document.getElementById('gallery'))