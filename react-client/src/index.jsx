import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components'


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

const Overlay = styled.div`
height: 100%;
width: 100%;
display: ${props => props.overlay ? "block" : "none"};
position: fixed;
z-index: 1;
top: 0;
left: 0;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0, 0.9);
`

const TEST_IMAGE_URL = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/t9QmCD4rQEmdqhiXUZPN_AI7B6379%20copy.jpg?auto=format&fm=jpg&fit=crop&w=800&h=242.42424242424244&bg=f0f0f0&q=38&dpr=2'

const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.state = {
      overlay: false
    }
  }

  handleImageClick(event) {
    console.log('you clicked the image!')
    this.setState ({
      overlay: true
    })
  }

  handleOverlayClick(event) {
    this.setState({
      overlay: false
    })
  }

  render() {

    return(<Container >
            <Image 
              src={TEST_IMAGE_URL} 
              onClick={
                this.handleImageClick
              }
              >
            </Image>
            <MagnifyingGlass 
              src = {MAGNIFYING_GLASS_URL}>
            </MagnifyingGlass>
            <Overlay 
              overlay={this.state.overlay}
              onClick={this.handleOverlayClick}
            />
          </Container>)
  }
}

ReactDom.render(<Gallery/>, document.getElementById('gallery'))