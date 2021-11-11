import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import GameTile from '../components/gameTile';
import Answers from '../components/answers';
import globalStyles from '../styles';

const Quiz = ({ route, navigation }) => {

    const { quizData } = route.params
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState([])

    /**
     * Increment the current question index or send the user
     * to the results screen when there are no more questions
     * to answer
     */
    const nextQuestion = () => {
        if (currentIndex === quizData.length - 1) {
            navigation.navigate('Results', { data: quizData, answers: answers })
        } else {
            setCurrentIndex((index) => index + 1)
        }
    }

    /**
     * Add answer to answers array and trigger transition to new
     * question
     * @param {String} answer 
     */
    const submitAnswer = (answer) => {
        setAnswers(array => [...array, answer])
        nextQuestion()
    }

    return (
        <SafeAreaView style={[globalStyles.container]}>
            <View style={{ alignSelf: 'center', top: '10%' }}>
                <Text style={[globalStyles.fonts.subTitle, pageStyles.pageText]}>{quizData[currentIndex].category}</Text>
                <Text style={[globalStyles.fonts.subTitle, pageStyles.pageText]}>{currentIndex + 1} of {quizData.length}</Text>
                <GameTile item={quizData[currentIndex]} />
                <Answers
                    correctAnswer={quizData[currentIndex].correct_answer}
                    incorrectAnswers={quizData[currentIndex].incorrect_answers}
                    submit={submitAnswer}
                />
            </View>
        </SafeAreaView>
    )
}

const pageStyles = StyleSheet.create({
    pageText: {
        textAlign: 'center',
        marginVertical: 5
    }
})

export default Quiz