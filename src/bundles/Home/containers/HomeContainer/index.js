import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../../components/Home'


class HomeContainer extends Component {

  props: Props

  render() {
    return (
      <Home {...this.props }  />
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

export default connect(null,null)(HomeContainer)
