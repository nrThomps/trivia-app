import React, { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet, Dimensions, Text, Pressable } from 'react-native'
import globalStyles from '../styles'

const ROW_WIDTH = Dimensions.get('window').width * 7 / 8 - 20 // account for margin

const Answers = (props) => {

    const { correctAnswer, incorrectAnswers, submit } = props
    const [answers] = useState([correctAnswer, ...incorrectAnswers])

    const onPress = (answer) => {
        submit(answer)
    }

    const AnswerItem = ({ item }) => {

        return (
            <Pressable onPress={() => onPress(item)}>
                {({ pressed }) => (
                    <View style={[styles.itemContainer, (pressed) ? styles.borderPressed : styles.itemBorder]}>
                        <Text style={[globalStyles.fonts.subTitle, (pressed) ? styles.textPressed : styles.text]}>{item}</Text>
                    </View>
                )}
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item}
                data={answers}
                renderItem={AnswerItem}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    },
    itemContainer: {
        padding: 25,
        borderWidth: 2,
        borderRadius: 15,
        width: ROW_WIDTH / 2,
        marginLeft: 5,
        marginRight: 5
    },
    borderPressed: {
        borderColor: 'blue',
    },
    itemBorder: {
        borderColor: '#eaeaea',
    },
    textPressed: {
        color: 'blue'
    },
    text: {
        color: '#000'
    }
})

export default Answers