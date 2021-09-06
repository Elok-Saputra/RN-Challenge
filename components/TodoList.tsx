import React, {FC} from 'react';
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/Colors';

interface Props {
    name: string;
    color: string;
    fontTitle: string;
    fontCount: string;
    fontSub: string;
    todos: number;
    remaining: number;
}

const TodoList: FC<Props> = (props): JSX.Element => {
    const completedCount = props.todos
    const remainingCount = props.remaining - completedCount
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <Text style={[styles.title, {fontFamily: props.fontTitle}]}>{props.name}</Text>

            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.count, {fontFamily: props.fontCount}]}>{remainingCount}</Text>
                    <Text style={[styles.subtitle, {fontFamily: props.fontSub}]}>Remaining</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.count, {fontFamily: props.fontCount}]}>{completedCount}</Text>
                    <Text style={[styles.subtitle, {fontFamily: props.fontSub}]}>Completed</Text>
                </View>
            </View>
        </View>
    )
}

export default TodoList;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 250,
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 24,
        color: 'white',
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        color: 'white',
    },
    subtitle: {
        fontSize: 12,
        color: 'white',
    },
})