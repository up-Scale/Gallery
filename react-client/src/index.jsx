import React from 'react';
import ReactDom from 'react-dom';
import Gallery from './components/Gallery.jsx';
import ProductGallery from './components/ProductGallery.jsx';

const GalleryContainer = () => {
  return(<div>
    <ProductGallery/>
  </div>)
}

ReactDom.render(<GalleryContainer/>, document.getElementById('gallery'))
