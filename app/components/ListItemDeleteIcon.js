import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ListItemDeleteIcon({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="trash-can" color={colors.white} size={35} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.danger,
        width: 70,
        height:'100%'
    }
});
