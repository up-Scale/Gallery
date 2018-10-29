import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import Gallery from './components/Gallery.jsx';

const SAMPLE_IMG = 'https://www.cats.org.uk/uploads/branches/1/42847%20Cats%20Weekly%20Lottery%20Web%20Banner.jpg'

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      overlay: false,
      bannerImg: '',
      carouselImgs: []
     }
    this.handleImageClick = () => this.setState({ overlay: true })
    this.handleOverlayClick = () => this.setState({ overlay: false})
  }

  render() {
    return(<div>
            <Gallery src={SAMPLE_IMG}/>
          </div>)
  }
}

ReactDom.render(<GalleryContainer/>, document.getElementById('gallery'))