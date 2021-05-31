import React, { useState } from 'react'
import { View, ScrollView, StatusBar, FlatList, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styles from './SearchScreen.Styles'
import SearchBar from '../../components/search_bar/SearchBar'
import Picker from '../../components/picker/Picker'
import { fetchSearchData } from '../../redux/actions/SearchActionsThunks'


const SearchItem = ({ searchItem, navigation }) => {
  const { name, rating, review_count, location } = searchItem
  const { address1, city, state, country } = location

  return (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('Details Screen')}
      }
    >
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.subheader}>{`rating: ${rating} - ${review_count} reviews`}</Text>
      <Text style={styles.subheader}>{`${address1}, ${city}, ${state}, ${country}`}</Text>
    </TouchableOpacity>
  )
}

const Separator = () => {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9', marginBottom: 15 }} />
}

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [location, setLocation] =useState('')
  const [data, setData ] = useState([])
  const [ category, setCategory ] = useState('')
  const dispatch = useDispatch()

  const { searchedData, showCategoryFilter, categoryList} = useSelector(state => state).SearchReducer

  const handleSearch = () => {
    dispatch(fetchSearchData(term, location))
    setData(searchedData)
  }  

  return (
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
    >
      <StatusBar barStyle="dark-content" />
      <SearchBar 
        term={term}
        location={location}
        onTermChange={(newTerm) => setTerm(newTerm)} 
        onLocationChange={(newLocation)=> setLocation(newLocation)}
        onHandleSearch={() => handleSearch()}
      />
      {showCategoryFilter && categoryList.length > 0 && (
        <Picker
          items={categoryList}
          label="Select a category"
          onValueChange={(value) => {
            setCategory(value)
            setData(searchedData.filter(i => i.categories[0].title === value))
          }}
          value={category}
       />
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <SearchItem searchItem={item} navigation={navigation} />}
          keyExtractor={(searchItem) => searchItem.name}
          ItemSeparatorComponent={() => Separator()}
        />
      </View>
    </ScrollView>
  )
}

export default SearchScreen