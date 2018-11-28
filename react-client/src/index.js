import React from 'react';
import ReactDOM from 'react-dom';
import GalleryContainer from './index.jsx';

ReactDOM.hydrate(<GalleryContainer />, document.getElementById('gallery'))
window.GalleryContainer = GalleryContainer;