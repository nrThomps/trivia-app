import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, Button } from 'react-native';
import { List } from 'react-native-paper';
import globalStyles from '../styles';
import { localize } from '../utilities/localization';
import { formatQuestionString } from '../utilities/utils';

const Results = ({ route, navigation }) => {

    const { data, answers } = route.params
    const [correctAnswers, setCorrectAnswers] = useState(0)

    /**
     * Checks if the answer at the specified index matches the correct answer
     * @param {Object} answer 
     * @param {number} index 
     * @returns true if the answer matches the correct answer
     */
    const isCorrectAnswer = (answer, index) => {
        return (answers[index] === answer.correct_answer)
    }

    /**
     * Returns the user to Home
     */
    const playAgain = () => {
        navigation.navigate('Home')
    }

    /**
     * Sum the total of correct answers
     */
    useEffect(() => {
        data.map((v, i) => {
            if (isCorrectAnswer(v, i)) {
                setCorrectAnswers((correct) => correct + 1)
            }
        })
    }, [])

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={[globalStyles.fonts.title, { textAlign: 'center', marginVertical: '4%' }]}>
                {localize('You Scored') + ': ' + correctAnswers + '/' + data.length}
            </Text>
            <ScrollView>
                {data.map((v, i) => (
                    <List.Item
                        key={i}
                        title={localize('Correct Answer: ') + data[i].correct_answer}
                        description={formatQuestionString(v.question)}
                        left={props =>
                            <List.Icon
                                icon={isCorrectAnswer(v, i) ? 'plus' : 'minus'}
                                color={isCorrectAnswer(v, i) ? globalStyles.colors.success : globalStyles.colors.danger}
                            />}
                    />
                ))}
            </ScrollView>
            <Button onPress={playAgain} title={localize('Play Again?')}></Button>
        </SafeAreaView>
    )
}

export default Results