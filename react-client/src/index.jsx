import React from 'react';
import ReactDom from 'react-dom';
import Gallery from './components/Gallery.jsx';
import ProductGallery from './components/ProductGallery.jsx';

const SAMPLE_IMG_0 = 'https://www.cats.org.uk/uploads/branches/1/42847%20Cats%20Weekly%20Lottery%20Web%20Banner.jpg'
const SAMPLE_IMG_1 = 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
const SAMPLE_IMG_2 = 'https://images.pexels.com/photos/65006/pexels-photo-65006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
const SAMPLE_IMG_3 = 'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
const SAMPLE_IMG_4 = 'https://images.pexels.com/photos/171227/pexels-photo-171227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
const SAMPLE_IMG_5 = 'https://images.pexels.com/photos/74177/cat-74177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const GalleryContainer = () => {
  return(<div>
    <ProductGallery/>
    {/* <Gallery src={SAMPLE_IMG_1} imgs={[SAMPLE_IMG_0, SAMPLE_IMG_2, SAMPLE_IMG_5, SAMPLE_IMG_4]} /> */}
    {/* <Gallery src={SAMPLE_IMG_2}/>
    <Gallery src={SAMPLE_IMG_3}/>
    <Gallery src={SAMPLE_IMG_4}/>
    <Gallery src={SAMPLE_IMG_5}/> */}
  </div>)
}

ReactDom.render(<GalleryContainer/>, document.getElementById('gallery'))