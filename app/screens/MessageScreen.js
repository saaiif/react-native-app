import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteIcon from '../components/ListItemDeleteIcon';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/myimg.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/myimg.png')
    }
];

export default function MessageScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, SetRefreshing] = useState(false);
    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message Selected', item)}
                        renderRightActions={() => <ListItemDeleteIcon onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/myimg.png')
                        }
                    ]);
                }}
            />
        </Screen>
    );
}
