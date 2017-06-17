import React, { Component } from 'react'
import { connect } from 'react-redux'
import StoriesPreview from '../../components/StoriesPreview'


class StoriesPreviewContainer extends Component {

  render() {
    return (
      <StoriesPreview {...this.props }  />
    )
  }

}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    }
  }

export default connect(null,null)(StoriesPreviewContainer)
