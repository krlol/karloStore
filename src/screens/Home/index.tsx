import SearchBar from 'components/SearchBar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Strings } from 'utils/strings';
import styles from './styles';

export default function HomeScreen() {

  const [searchValue, setSearchValue] = useState('');

  return (<ScrollView style={styles.scrollView}>
    <View style={styles.headerContainer}>
      <SearchBar
        placeholder={Strings.SearchPlaceHolder}
        value={searchValue}
        onChangeText={(text)=>setSearchValue(text)}
        onSubmit={()=>{}}
      />
    </View>
    <View style={styles.chipsContainer}>

    </View>
    
  </ScrollView>)
}
