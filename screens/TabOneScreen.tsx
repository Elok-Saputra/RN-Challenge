import React, { useState } from 'react';
import {FlatList, StyleSheet, Text, View, Modal} from 'react-native';
// import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import Data from '../constants/Data'
import TodoList from '../components/TodoList';
import AddActivityModal from '../components/AddActivityModal';


export default function TabOneScreen() {
  const [addActivityModal, setAddActivityModal] = useState(false)
  const [lists, setLists] = useState(Data)

  const toggleAddActivity = () => {
    setAddActivityModal(!addActivityModal)
  }
  
  const [fontLoaded] = useFonts({
    'spaceMono': require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if(!fontLoaded) {
    return null;
  }

  const addList = (list: any) => {
    setLists([...lists, {...list, id: lists.length + 1, todos:[]}])
  }

  const updateList = (list: any) => {
    setLists(lists.map(e => {
      return e.id === list.id ? list : e
    }))
  }

  return (
    <View style={styles.container}>
      <View>
        {/* HEADER */}
        <View style={styles.header}>
        <Text style={styles.title}>Ga<Text style={styles.titleColor}>We</Text></Text>
        <View style={styles.separator} />
        </View>
        {/* END OF HEADER */}
      </View>

      {/* ADD BUTTON */}
      <View style={styles.addBtnCont}>
        <TouchableOpacity style={styles.addBtn} onPress={toggleAddActivity}>
        <Text style={styles.addBtnText}>Add New Activity</Text>
        <FontAwesome5 name="plus" size={24} color={Colors.light.tint} />
        </TouchableOpacity>
      </View>
      {/* END OF ADD BUTTON */}

      <View>
      {/* ACTIVITY LISTS */}
      <View>
        <FlatList 
          data={lists}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({item}) => (
            <TodoList 
            id={item.id}
            name={item.name} 
            color={item.color} 
            fontTitle='spaceMono' 
            fontCount='spaceMono' 
            fontSub='spaceMono' 
            todos={item.todos.filter(todo => todo.completed).length} 
            remaining={item.todos.length} todosLength={item.todos.length} 
            dataList={item.todos}
            updateList={updateList}
            />
          )}
          keyboardShouldPersistTaps='always'
        />
      </View>
      {/* END OF ACTIVITY LISTS */}
      </View>

      {/* POP UP MODAL */}
      <Modal 
      animationType='slide' 
      visible={addActivityModal} 
      onRequestClose={toggleAddActivity}>
        <AddActivityModal closeModal={toggleAddActivity} addList={addList} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 24,
    justifyContent: 'space-between',

  },
  header: {
    alignItems:'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 40,
    fontFamily: 'spaceMono'
  },
  titleColor: {
    fontSize: 40,
    fontFamily: 'spaceMono',
    color: Colors.light.tint
  },
  separator: {
    marginVertical: 6,
    height: 1,
    width: '80%',
    backgroundColor: Colors.light.tint,
  },
  addBtnCont: {
    marginVertical: 16,
    alignItems: 'center',
  },
  addBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200,
    height: 36,
    borderWidth: 1,
    borderColor: Colors.light.tint,
    borderRadius: 8,
  },
  addBtnText: {
    fontFamily: 'spaceMono',
    color: Colors.light.tint,
  },
});
