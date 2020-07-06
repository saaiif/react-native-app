import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
];

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Saif Mujawar"
                    subTitle="saif.m@shirishproductions.com"
                    image={require('../assets/myimg.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    )}
                />
            </View>
            <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
});
