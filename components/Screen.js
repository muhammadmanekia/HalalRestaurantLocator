import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export default function Screen({children, style }) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        flex: 1
    },
    view: {
        // flex: 1
    }
})
