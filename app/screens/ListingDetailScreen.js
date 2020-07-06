import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

export default function ListingDetailScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.itemTitle}>Red Jacket For Sell</AppText>
                <AppText style={styles.subTitle}>$100</AppText>
            </View>
            <View style={styles.nameContainer}>
                <ListItem title="Saif Mujawar" subTitle="5 Listing" image={require('../assets/myimg.png')} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 250
    },
    itemTitle: {
        fontSize: Platform.OS === 'android' ? 24 : 20,
        fontWeight: '600'
    },
    subTitle: {
        color: colors.secondary,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    nameContainer: {
        marginVertical: 20
    }
});
