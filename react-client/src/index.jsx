import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components'

const TEST_IMAGE_URL = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/t9QmCD4rQEmdqhiXUZPN_AI7B6379%20copy.jpg?auto=format&fm=jpg&fit=crop&w=800&h=242.42424242424244&bg=f0f0f0&q=38&dpr=2'

const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(event) {
    console.log('you clicked the image!')
  }

  render() {

    const Container = styled.div`
      position: relative;
    `
    const Image = styled.img`
      width: 100%;
      display: block;
    `
    const MagnifyingGlass = styled.img`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 15%;
      width: 15%;
      opacity: 0;
      ${Container}:hover & {
        opacity: 1;
      }
    `
    return(<Container>
            <Image 
              src={TEST_IMAGE_URL} 
              onClick={this.handleImageClick}>
            </Image>
            <MagnifyingGlass 
              src = {MAGNIFYING_GLASS_URL}>
            </MagnifyingGlass>
          </Container>)
  }
}

ReactDom.render(<Gallery/>, document.getElementById('gallery'))