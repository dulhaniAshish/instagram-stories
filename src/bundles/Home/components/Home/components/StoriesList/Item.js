import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native'

var Lightbox = require('react-native-lightbox');

import Carousel from 'react-native-looped-carousel';

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

var _this;

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

    renderFullScreenLightBox(uri,key){
      return(
        <View key={key} style={{flex : 1}}>
            <Image
              style={{ flex: 1 }}
              resizeMode="contain"
              source={{ uri: uri }}
            />
        </View>
      )

    }

    renderCarousel() {
      const imageUris= [
        'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg',
        'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg',
        'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg',
      ];
      const lightboxViews = [];
      for (i= 0 ; i<imageUris.length ;i++ ){
        lightboxViews.push(
            _this.renderFullScreenLightBox(imageUris[i],i)
        )
      }

      return (
        <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
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
            <View>
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
})

export default StoryItem
