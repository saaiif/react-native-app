import React from 'react';
import { Image, View, StyleSheet, StatusBar, Platform } from 'react-native';

import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ViewImageScreen(props) {
    return (
        <View style={styles.Container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image resizeMode="contain" style={styles.Image} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 20,
        right: 30
    },
    Image: {
        width: '100%',
        height: '100%'
    }
});
