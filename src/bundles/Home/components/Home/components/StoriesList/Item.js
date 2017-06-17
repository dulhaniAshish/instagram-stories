import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,   
} from 'react-native'

class StoryItem extends Component {


    render() {

        const {
            style,
            story,
            open,
        } = this.props

        const {
            user,
            media,
        } = story

        return (
            <TouchableOpacity onPress={() => open(story)}>
                <View style={[
                    styles.container,
                    style
                ]}>
                    <Text style={styles.nameOfUser}>{user.name}</Text>
                </View>
            </TouchableOpacity>
        )
    };
}


const styles = StyleSheet.create({
    container: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: 'red',
    },
    nameOfUser: {
        fontSize: 14,
    },
})

export default StoryItem