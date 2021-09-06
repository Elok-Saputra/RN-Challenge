import React, {FC} from 'react';
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/Colors';

interface Props {
    name: string;
    color: string;
    fontTitle: string;
    fontCount: string;
    fontSub: string;
}

const TodoList: FC<Props> = (props): JSX.Element => {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <Text style={[styles.title, {fontFamily: props.fontTitle}]}>{props.name}</Text>

            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.count, {fontFamily: props.fontCount}]}>0</Text>
                    <Text style={[styles.subtitle, {fontFamily: props.fontSub}]}>Remaining</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.count, {fontFamily: props.fontCount}]}>0</Text>
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
        borderRadius: 8,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: '200',
        color: 'white',
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: 'white',
    },
})