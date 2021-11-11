import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles';
import { localize } from '../utilities/localization';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

const Home = ({ navigation }) => {

    const [gameData, setGameData] = useState([])
    const [loading, setLoading] = useState(true)

    /**
     * GET quiz data from API asyncronously to pass to quiz screen
     */
    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL).then(res => {
                setGameData(res.data.results)
                setLoading(false)
            }).catch(err => {
                // handle error
                setLoading(false)
            })
        }
        fetchData()
        return () => { fetchData() }
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={[globalStyles.centerScreen]}>
                <Text style={[
                    globalStyles.fonts.title,
                    pageStyles.contentPosition,
                    pageStyles.title]}
                >
                    {localize('Welcome to Trivia Challenge!')}
                </Text>
                <Image source={globalStyles.images.questions} style={pageStyles.image} />
                <Text style={[
                    globalStyles.fonts.subTitle,
                    pageStyles.subtitle,
                    globalStyles.pageMargins]}
                >
                    {localize('You will be presented with 10 True or False questions.')}
                </Text>
                <Text style={[globalStyles.fonts.paragraph, { marginVertical: 25 }]}>{localize('Can you score 100%?')}</Text>
                {!loading &&
                    <Button
                        onPress={() => navigation.navigate('Quiz', { quizData: gameData })}
                        mode='outlined'
                        theme={{ colors: { primary: 'blue' }, roundness: 15 }}
                        style={{ width: '80%' }}
                    >
                        {localize('Begin')}
                    </Button>
                }
                {loading && <ActivityIndicator size={24} />}
            </View>
        </SafeAreaView>
    )
}

const pageStyles = StyleSheet.create({
    title: {
        marginTop: 50,
        marginBottom: 15,
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    subtitle: {
        paddingHorizontal: 15,
        marginTop: 15,
        marginBottom: 10,
        textAlign: 'center'
    },
    contentPosition: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    image: {
        height: 300,
        width: '100%',
        marginVertical: '15%'
    }
})

export default Home