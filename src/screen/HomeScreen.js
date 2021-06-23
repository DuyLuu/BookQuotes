import React, { useContext } from 'react'
import { View, StyleSheet, Text, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const HomeScreen = () => {
    const {value, dispatch} = useContext(BlogContext)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 72, color: 'red' }}>{value}</Text>
            <Button title="Increase" onPress={() => dispatch({ type: 'increase' })}/>
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrease' })}/>
        </View>
    )
}

export default HomeScreen