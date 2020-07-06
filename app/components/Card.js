import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={image} />
            <View style={styles.main}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        borderRadius: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    main: {
        padding: 20
    },
    title: {
        marginBottom: 5
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
});
