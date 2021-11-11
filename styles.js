const fontFamily = {
    thin: 'Poppins_100Thin',
    light: 'Poppins_300Light',
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold'
}

const colors = {
    primary: 'blue',
    secondary: '#000',
    background: '#fff',
    success: '#5cb85c',
    danger: '#d9534f'
}

const globalStyles = {
    centerScreen: {
         alignItems: 'center', 
         justifyContent: 'center' 
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingLeft: 8,
        paddingRight: 8
    },
    pageMargins: {
        marginLeft: 8,
        marginRight: 8
    },
    button: {
        borderColor: colors.primary,
        borderWidth: 1,
        color: colors.primary
    },
    // following Apple's human interface guidelines
    fonts: {
        title: {
            fontSize: 28,
            fontFamily: fontFamily.medium
        },
        subTitle: {
            fontSize: 22,
            fontFamily: fontFamily.light
        },
        paragraph: {
            fontSize: 17,
            fontFamily: fontFamily.regular
        },
        boldLarge: {
            fontSize: 20,
            fontFamily: fontFamily.medium
        }
    },
    images: {
        questions: require('./assets/undraw_Questions.png')
    },
    colors: colors
}

export default globalStyles