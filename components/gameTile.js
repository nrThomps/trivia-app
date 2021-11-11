import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Surface } from 'react-native-paper'
import globalStyles from '../styles'
import { formatQuestionString } from '../utilities/utils'

const CARD_WIDTH = Dimensions.get('window').width * 7 / 8
const CARD_HEIGHT = Dimensions.get('window').height / 3

const GameTile = ({ item }) => {

    return (
        <Surface style={styles.surface}>
            <View style={[styles.innerContainer]}>
                <Text style={globalStyles.fonts.boldLarge}>{formatQuestionString(item.question)}</Text>
            </View>
        </Surface>
    )
}

const styles = StyleSheet.create({
    surface: {
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        elevation: 4,
        marginTop: '10%',
        marginBottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    innerContainer: { padding: 25 }
})

export default GameTile