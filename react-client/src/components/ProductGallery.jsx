
import React from 'react';
import Gallery from './Gallery.jsx';
import axios from 'axios';

// ProductGallery is specialized component which will provide the lead banner image for a product, to be featured on each product page

// It gets all data for the db via ProductName.  It expects product.bannerImage and an array of images associated w the product
class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      bannerImg: '',
      carouselImgs: [],
      fourOhFour: 'none'
    }
  }

  componentDidMount() {
    let url = new URL(window.location.href)
    let productName = 'test1'
    if (url.pathname !== '/') {
      productName = url.pathname.split('/')[2]
    }
    
    axios.get('/productImages/' + productName)
    .then(res => {
      this.setState({
        bannerImg: res.data.bannerImageUrl,
        carouselImgs: res.data.images.split(',')
      })
    })
    .catch(err => {
      if (err.message === 'Request failed with status code 404') {
        this.setState({
          fourOhFour: 'block'
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Gallery src={this.state.bannerImg} imgs={this.state.carouselImgs}/>
        <div styles={{ display: this.state.fourOhFour }}>Not Found - Please Try Another Product</div>
      </div>
    );
  }
}

export default ProductGallery