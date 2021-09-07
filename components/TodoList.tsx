import React, {FC, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native'
import TodoModal from './TodoModal'
interface Props {
    name: string;
    color: string;
    fontTitle: string;
    fontCount: string;
    fontSub: string;
    todos: number;
    remaining: number;
    todosLength: number;
    title: string
    dataList: []
}

const TodoList: FC<Props> = (props): JSX.Element => {
    const completedCount = props.todos
    const remainingCount = props.remaining - completedCount

    const [showListVisible, setShowListVisible] = useState(false);
    
    const toggleListModal = () => {
        setShowListVisible(!showListVisible)
    }

    return (
        <>
            <TouchableOpacity style={[styles.container, {backgroundColor: props.color}]} onPress={toggleListModal} activeOpacity={0.6}>
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
            </TouchableOpacity>

            {/* MODAL */}
            <TodoModal visible={showListVisible} close={toggleListModal} closeModal={toggleListModal} name={props.name} color={props.color} todos={props.todos} todosLength={props.todosLength} data={props.dataList}/>
        </>

)
}


export default TodoList;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
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
        marginBottom: 12,
    },
    count: {
        fontSize: 40,
        color: 'white',
    },
    subtitle: {
        fontSize: 12,
        color: 'white',
    },
})