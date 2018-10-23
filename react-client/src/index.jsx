import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components'

const TEST_IMAGE_URL = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/t9QmCD4rQEmdqhiXUZPN_AI7B6379%20copy.jpg?auto=format&fm=jpg&fit=crop&w=800&h=242.42424242424244&bg=f0f0f0&q=38&dpr=2'
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(event) {
    console.log('you clicked the image!')
  }

  render() {
    const Image = styled.img`
      width: 100%;
    `

    const Overlay = styled.div`
      height: 100%;
      width: 100%;
      display: none;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0, 0.9);
    `

    return(<div>
              <Image src={TEST_IMAGE_URL} onClick={this.handleImageClick}></Image>
              <Overlay/>
            </div>)
  }
}

ReactDom.render(<Gallery/>, document.getElementById('gallery'))