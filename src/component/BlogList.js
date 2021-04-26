import React, { useContext } from 'react'
import { View, StyleSheet, Text, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const BlogList = () => {
    const {value, dispatch} = useContext(BlogContext)

    return (
        <View>
            <Text>This is Blog list {value}</Text>
            <Button title="Increase" onPress={() => dispatch({ type: 'increase' })}/>
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrease' })}/>
        </View>
    )
}

export default BlogList