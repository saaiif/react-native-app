import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.listingContainer}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    listingContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.white
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 35
    },
    subTitle: {
        color: colors.medium,
        fontWeight: '300'
    },
    title: {
        color: colors.black,
        fontWeight: '500'
    }
});
