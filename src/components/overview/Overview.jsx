import React from 'react'
import StyleSelector from './StyleSelector.jsx'
import styles from './sampleData/productStyles.js'
import productInfo from './sampleData/productInfo.js'
import ImageGallery from './imageGallery/ImageGallery.jsx'
import ProductBasics from './ProductBasics.jsx'
import QA from '../QAComponents/Qa.jsx'
import Reviews from '../ReviewsComponents/Reviews.jsx'

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: productInfo,
      styles: styles.results,
      selectedStyle: styles.results[0] // default is first style
    }
    this.clickStyleHandler = this.clickStyleHandler.bind(this)
  }

  clickStyleHandler (clickedStyleId) {
    let selectedStyle;
    this.state.styles.forEach(style => {
      if (style.style_id == clickedStyleId) {
        selectedStyle = style
      }
    })
    this.setState({ selectedStyle: selectedStyle })
  }


  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7">
              <ImageGallery photos={this.state.selectedStyle.photos}  />
            </div>
            <div className="col-sm-5">
              <div className="row">
                <div className="col-sm-12">
                  <ProductBasics productInfo={this.state.productInfo} />
                </div>
                <div className="col-sm-12">
                  <StyleSelector selectedStyle={this.state.selectedStyle} clickStyleHandler={this.clickStyleHandler} styles={this.state.styles} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <QA productId={this.state.productInfo.id}/>
        </div>
        <div>
          <Reviews productId={this.state.productInfo.id} />
        </div>
      </div>
    )
  }
}

export default Overview