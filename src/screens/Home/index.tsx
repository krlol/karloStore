import SearchBar from 'components/SearchBar';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from 'redux/hooks';
import { useCategoriesActions } from '../../data/categories';
import { Strings } from 'utils/strings';
import styles from './styles';
import Chip, { LoadingChip } from 'components/Chip';
import { Colors } from 'utils/colors';

export default function HomeScreen() {

  const [searchValue, setSearchValue] = useState('');
  const CategoriesActions = useCategoriesActions();
  const { categoriesList, loadingCategories } = useAppSelector(state => state.categories);
  const loadingChipSkeletons:React.ReactNode = [<LoadingChip/>,<LoadingChip/>,<LoadingChip/>];

  useEffect(()=>{
    CategoriesActions.fetchAllCategories();
  },[])


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
      {loadingCategories ? loadingChipSkeletons : null}
      {categoriesList.length > 0 ? categoriesList.map((category)=><Chip backgroundColor={Colors.FourthColor} title={`${category.category}`}/>) : null}
    </View>
    
  </ScrollView>)
}
