import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={8} style={styles.background} source={require('../assets/Wallpaper.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    },
    buttonContainer: {
        width: '100%',
        padding: 20
    }
});
