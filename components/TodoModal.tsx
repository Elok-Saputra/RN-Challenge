import React, {FC, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, SafeAreaView, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors';
import Data from '../constants/Data'

interface Props {
    visible: boolean
    close: () => void
    closeModal: () => void
    name: string
    color: string
    todos: number
    todosLength: number
    data: []
}

const TodoModal: FC<Props> = (props): JSX.Element => {
    const [name, setName] = useState(props.name)
    const [color, setColor] = useState(props.color)
    const [data, setData] = useState(props.data)

    const completedCount = props.todos
    return (
        <Modal
        animationType='slide'
        visible={props.visible}
        onRequestClose={props.close}>
            <SafeAreaView style={styles.safeArea}>
                {/* ICON CLOSE */}
                <TouchableOpacity style={styles.closeBtn} onPress={props.closeModal}>
                    <AntDesign name='close' size={24} color={Colors.light.text} />
                </TouchableOpacity>
            {/* END OF ICON CLOSE */}
            </SafeAreaView>

            <View style={[styles.section, styles.header, {borderBottomColor: color}]}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.taskCount}>{completedCount} of {props.todosLength} tasks</Text>
                </View>
            </View>

            <View style={[styles.section, {flex: 3}]}>
                <FlatList 
                data={data} 
                renderItem={({item}) => (
                    <Text>{item}</Text>
                )} 
                />
            </View>
        </Modal>
    )
}

export default TodoModal;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeBtn: {
        position: 'absolute',
        top: 64,
        right: 32,
        zIndex: 10,
    },
    section: {
        flex: 1,
        alignSelf: 'stretch',
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: Colors.light.text,
        fontFamily: 'spaceMono',
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: Colors.default.grey,
        fontFamily: 'spaceMono',
        fontWeight: '600'
    }
})