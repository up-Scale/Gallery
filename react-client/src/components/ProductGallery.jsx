
import React from 'react';
import Gallery from './Gallery.jsx';
import axios from 'axios';

// ProductGallery is specialized component which will provide the lead banner image for a product, to be featured on each product page

// It gets all data for the db via ProductName.  It expects product.bannerImage and an array of images associated w the product
class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      bannerImg: null,
      carouselImgs: null
    }
  }

  // this is a specialized call for ProductGallery. TODO continue refactor
  componentDidMount() {
    let url = new URL(window.location.href)
    let productName = 'test1'
    if (url.pathname !== '/') productName = url.pathname.split('/')[1]

    axios.get('/productImages/' + productName)
    .then(res => {
      console.log(res.data)
      this.setState({
        bannerImg: res.data.bannerImageUrl,
        carouselImgs: [res.data.images]
      })
    })
  }

  render() {
    return (
      <Gallery src={this.state.bannerImg}/>
    );
  }
}

export default ProductGallery