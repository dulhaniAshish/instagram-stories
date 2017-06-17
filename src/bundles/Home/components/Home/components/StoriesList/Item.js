import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,   
} from 'react-native'

class StoryItem extends Component {


    getBorderColor() {
        const {
            story
        } = this.props
        
        if(story.isRead) {
            return 'red'
        } else {
            return 'green'
        }
    }


    render() {

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
            <TouchableOpacity onPress={() => openStory(story)}>
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
            </TouchableOpacity>
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