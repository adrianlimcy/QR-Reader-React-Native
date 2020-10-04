import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const About = ({navigation}) => (
    <View style={styles.container}>
        <Text>This is the about page</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default About