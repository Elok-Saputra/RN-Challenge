import * as React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
// import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import { useFonts, SpaceMono_400Regular, SpaceMono_400Regular_Italic, SpaceMono_700Bold, SpaceMono_700Bold_Italic } from '@expo-google-fonts/space-mono';
import { FontAwesome5 } from '@expo/vector-icons';
import Data from '../constants/Data'
import TodoList from '../components/TodoList';


export default function TabOneScreen() {
  let [fontsLoaded, error] = useFonts({
    regular: SpaceMono_400Regular,
    regItalic: SpaceMono_400Regular_Italic,
    bold: SpaceMono_700Bold,
    boldItalic: SpaceMono_700Bold_Italic,
  });

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
      <Text style={styles.title}>Ga<Text style={styles.titleColor}>We</Text></Text>
      <View style={styles.separator} />
      </View>
      {/* END OF HEADER */}

      {/* ADD BUTTON */}
      <View style={styles.addBtnCont}>
        <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add New Activity</Text>
        <FontAwesome5 name="plus" size={24} color={Colors.light.tint} />
        </TouchableOpacity>
      </View>
      {/* END OF ADD BUTTON */}
      <Text style={{fontFamily: 'bold'}}>Hey ho masih ga ngerti cara pake typescript</Text>

      {/* ACTIVITY LISTS */}
      <View>
        <FlatList 
        data={Data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({item}) => (
          <TodoList name={item.name} color={item.color} fontTitle='bold' fontCount='regular' fontSub='bold' />
        )}
        />
      </View>
      {/* END OF ACTIVITY LISTS */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    alignItems:'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 40,
    fontFamily: 'regular'
  },
  titleColor: {
    fontSize: 40,
    fontFamily: 'bold',
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
    fontFamily: 'regular',
    color: Colors.light.tint,
  },
});
