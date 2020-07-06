import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function AppButton({ title, onPress, color = 'primary' }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 25,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold'
    }
});
