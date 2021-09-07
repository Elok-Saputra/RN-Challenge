import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors';
import Data from '../constants/Data'

interface Props {
    closeModal: () => void;
}

 const AddActivityModal: FC<Props> = (props): JSX.Element => {
     const [activityName, setActivityName] = useState('');
     
    //  FOR COLOR PICKER
     const backgroundColor = [
         Colors.default.green,
         Colors.default.blue,
         Colors.default.orange,
         Colors.default.peach,
         Colors.default.lightBlue,
         Colors.default.purple,
         Colors.default.yellow,
        ]

    const [colors, setColors] = useState(backgroundColor[0])

    // TO RENDER THE COLOR PICKER
    const renderColor = () => {
        return backgroundColor.map(color => (
            <TouchableOpacity key={color} style={[styles.colorSelect, {backgroundColor: color}]} onPress={() => setColors(color)} />
        ))
    }

    
    const createActivity = () => {
        Data.push({
            name: activityName,
            color: colors,
            todos: []
        });

        setActivityName(activityName);
        setColors(colors)
        props.closeModal();
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            {/* ICON CLOSE */}
            <TouchableOpacity style={styles.closeBtn} onPress={props.closeModal}>
                <AntDesign name='close' size={24} color={Colors.light.text} />
            </TouchableOpacity>
            {/* END OF ICON CLOSE */}

            <View style={styles.headerTitleCont}>
                {/* HEADER TITLE */}
                <Text style={styles.headerTitle}>Create New Activity</Text>
                {/* ======================================================== */}

                {/* TEXT INPUT */}
                <TextInput style={[styles.input, {borderColor: colors,}]} placeholder='Add Activity Name' onChangeText={(text) => setActivityName(text)} value={activityName}/>
                {/* END OF TEXT INPUT */}

                {/* COLOR PICKER */}
                <View style={styles.colorSelectCont}>
                    {renderColor()}
                </View>
                {/* END OF COLOR PICKER */}

                {/* CREATE BUTTON */}
                <TouchableOpacity style={[styles.createBtn, {backgroundColor: colors}]} onPress={createActivity}>
                    <Text style={styles.createText}>Create!</Text>
                </TouchableOpacity>
                {/* CREATE BUTTON */}

            </View>
        </KeyboardAvoidingView> 
    )
}
export default AddActivityModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeBtn: {
        position: 'absolute',
        top: 64,
        right: 32,
    },
    headerTitleCont: {
        alignSelf: 'stretch',
        marginHorizontal: 32,
    },
    headerTitle: {
        fontSize: 28,
        fontFamily: 'spaceMono',
        color: Colors.light.text,
        alignSelf: 'center',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1.2,
        borderRadius: 8,
        height: 56,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: 'spaceMono',
    },
    createBtn: {
        marginTop: 24,
        height: 40,
        width: '30%',
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    createText: {
        color: 'white',
        fontFamily: 'spaceMono',
        fontWeight: '600',
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 6,
    },
    colorSelectCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    }
})