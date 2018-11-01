
import React from 'react';
import Gallery from './Gallery.jsx';
import axios from 'axios';

import styled from 'styled-components';
// ProductGallery is specialized component which will provide the lead banner image for a product, to be featured on each product page

// It gets all data for the db via ProductName.  It expects product.bannerImage and an array of images associated w the product

const NotFound = styled.div`
  display: ${props => props.fourOhFour ? "block" : "none"};
`

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = { 
      bannerImg: '',
      carouselImgs: [],
      fourOhFour: false
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
        carouselImgs: res.data.images.split(','),
        fourOhFour: false
      })
      console.log(this.state.fourOhFour)
    })
    .catch(err => {
      if (err.message === 'Request failed with status code 404') {
        this.setState({
          fourOhFour: true
        })
      }
    })
  }

  render() {

    return (
      <div>
        <Gallery src={this.state.bannerImg} imgs={this.state.carouselImgs}/>
        <NotFound fourOhFour={this.state.fourOhFour}>Not Found - Please Try Another Product</NotFound>
      </div>
    );
  }
}

export default ProductGallery