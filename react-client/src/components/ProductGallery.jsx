
import React from 'react';
import Gallery from './Gallery.jsx';
import axios from 'axios';
import styled from 'styled-components';

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