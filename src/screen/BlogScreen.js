import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { useSelector } from 'react-redux'

const BlogScreen = () => {
    const blogs = useSelector(root => root.blogs)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Blog Screen {blogs?.[0]?.title}</Text>
        </SafeAreaView>
    )
}

export default BlogScreen
