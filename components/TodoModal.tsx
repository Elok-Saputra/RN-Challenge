import React, {FC, useState} from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
    Modal, 
    SafeAreaView, 
    FlatList, 
    KeyboardAvoidingView, 
    TextInput, 
    Keyboard } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';
import Data from '../constants/Data'

interface data{
    title: string
    completed: boolean
}
interface Props {
    visible: boolean
    close: () => void
    closeModal: () => void
    updateList: (arg: any) => void
    name: string
    color: string
    todos: number
    todosLength: number
    dataList: data[]
}

const TodoModal: FC<Props> = (props): JSX.Element => {
    const [data, setData] = useState(props.dataList)
    const [newTodo, setNewTodo] = useState('')

    const toggleTodoCompleted = (index: any) => {
        let list = props
        list.dataList[index].completed = !list.dataList[index].completed

        props.updateList(list)
    }

    const addTodo = () => {
        let list = props
        list.dataList.push({
            title: newTodo,
            completed: false,
        })
        props.updateList(list)
        setNewTodo('')
        Keyboard.dismiss()
    }

    const completedCount = props.todos
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior='position'>
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

            {/* TITLE AND NUMBER OF TASKS */}
            <View style={[styles.section, styles.header, {borderBottomColor: props.color}]}>
                <View>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.taskCount}>{completedCount} of {props.todosLength} tasks</Text>
                </View>
            </View>
            {/* END OF TITLE AND NUMBER OF TASKS */}

            {/* TASKS */}
            <View style={[styles.section, {flex: 3}]}>
                <FlatList 
                data={data} 
                renderItem={({item, index}) => (
                    <View style={styles.todoContainer}>
                        {/* CHECKBOX */}
                        <TouchableOpacity onPress={() => toggleTodoCompleted(index)}>
                            <Ionicons 
                            name={item.completed ? 'ios-square' : 'ios-square-outline'} 
                            size={24} color={Colors.default.grey} 
                            style={{width: 32}} />
                        </TouchableOpacity>
                        {/* END OF CHECKBOX */}

                        {/* TASKS NAME */}
                        <Text style={[styles.todo, 
                            {color: item.completed ? Colors.default.grey : Colors.light.text, 
                            textDecorationLine: item.completed ? 'line-through' : 'none'
                            }]}>
                            {item.title}
                        </Text>
                    </View>
                )}
                keyExtractor={item => item.title} 
                contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}
                showsVerticalScrollIndicator={false}
                />
            </View>
            {/* END OF TASKS */}

            {/* INPUT TASK FIELD */}
            <View style={[
                styles.section, styles.footer
            ]}>
                {/* TEXT INPUT */}
                <TextInput 
                    style={[styles.input, {borderColor: props.color}]}
                    placeholder='Add new task'
                    onChangeText={text => setNewTodo(text)}
                    value={newTodo}
                />
                {/* END OF TEXT INPUT */}

                {/* PLUS BUTTON */}
                <TouchableOpacity 
                style={[styles.addTodo, {backgroundColor: props.color}]}
                onPress={addTodo}
                >
                    <AntDesign name='plus' size={16} color='white' />
                </TouchableOpacity>
                {/* END OF PLUS BUTTON */}

            </View>
            {/* END OF INPUT TASK FIELD */}
            </SafeAreaView>

        </Modal>
        </KeyboardAvoidingView>
    )
}

export default TodoModal;

const styles = StyleSheet.create({
    safeArea: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeBtn: {
        position: 'absolute',
        top: 32,
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
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 8,
        paddingHorizontal: 8,
        fontFamily: 'spaceMono'
    },
    addTodo: {
        borderRadius: 6,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    todoContainer: {
        marginTop: 6,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    todo: {
        color: Colors.light.text,
        fontFamily: 'spaceMono',
        fontWeight: '600',
    },
})