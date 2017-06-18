import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native'

import Carousel from 'react-native-looped-carousel';
import ReactNativeProgressBar from '../../../../../../../src/shared/ProgressBar';

var Lightbox = require('react-native-lightbox');
var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

var _this;
const imageUris= [
  'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg',
  'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg',
  'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg',
];

const FullScreenLightBox = ({uri, key}) => (
    <View key={key} style={{flex : 1}}>
        <Image
          style={{ flex: 1 }}
          resizeMode="contain"
          source={{ uri: uri }}
        />
    </View>
)

class StoryItem extends Component {

    constructor(props) {
      super(props)
      _this = this
    }

    getBorderColor () {
        const {
            story
        } = this.props

        if(story.isRead) {
            return 'red'
        } else {
            return 'green'
        }
    }

    renderCarousel() {
      const lightboxViews = [];
      for (i= 0 ; i<imageUris.length ;i++ ){
        lightboxViews.push(
            <FullScreenLightBox uri={imageUris[i]} key={i}/>
        )
      }

      return (
        <Carousel delay={5000} style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
          {lightboxViews}
        </Carousel>
      );
    }


    render () {
        const {
            style,
            story,
            openStory,
        } = this.props

        const {
            user,
            media,
        } = story

        return (
          <Lightbox renderHeader={close => (
              <View style={{paddingTop: 25}}>
                <TouchableOpacity onPress={close}>
                  <ReactNativeProgressBar
                    height={2}
                    borderWidth={0}
                    start={true}
                    duration={500}
                  />
                </TouchableOpacity>
              </View>
            )} swipeToDismiss={false} renderContent={this.renderCarousel}>
                <View style={[
                    style,
                    styles.container,
                ]}>
                <Image
                    source={{url: 'http://lorempixel.com/output/city-q-c-640-480-6.jpg' }}
                    style={[styles.userImageContainer, {borderColor: this.getBorderColor()}]}
                    resizeMode={'contain'} />
                <View style={styles.nameContainer}>
                    <Text style={styles.nameOfUser}>{user.name}</Text>
                </View>
                </View>
          </Lightbox>
        )
    };
}


const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 70,
        alignItems: 'center',
    },
    userImageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'red',
    },
    nameContainer: {
        marginTop: 5,
        maxHeight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameOfUser: {
        fontSize: 14,
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
})

export default StoryItem
