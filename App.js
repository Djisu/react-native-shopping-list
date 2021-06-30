import React, {useState} from 'react'
import  {StyleSheet, Text, View, FlatList, Alert}  from 'react-native';
import { uuid } from 'uuid.@3.3.3';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = () => {
  const [items, setItems] = useState([
    {id:1, text: 'Milk'},
    {id:2, text: 'Eggs'},
    {id:3, text: 'Bread'},
    {id:4, text: 'Juice'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}])
    }else{
      setItems(prevItems => {
      let newId = Math.floor(Math.random() * 100)		  
      return [{id: newId, text}, ...prevItems]
    })
  }

    
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}  />
      <FlatList 
          data={items} 
          renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  },
 
});

export default App