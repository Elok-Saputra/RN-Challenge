import React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
// import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import Data from '../constants/Data'
import TodoList from '../components/TodoList';


export default function TabOneScreen() {
  let [fontLoaded] = useFonts({
    'spaceMono': require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if(!fontLoaded) {
    return null;
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
        <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add New Activity</Text>
        <FontAwesome5 name="plus" size={24} color={Colors.light.tint} />
        </TouchableOpacity>
      </View>
      {/* END OF ADD BUTTON */}

      <View>
      {/* ACTIVITY LISTS */}
      <View>
        <FlatList 
        data={Data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({item}) => (
          <TodoList name={item.name} color={item.color} fontTitle='spaceMono' fontCount='spaceMono' fontSub='spaceMono' todos={item.todos.filter(todo => todo.completed).length} remaining={item.todos.length} />
        )}
        />
      </View>
      {/* END OF ACTIVITY LISTS */}
      </View>
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
