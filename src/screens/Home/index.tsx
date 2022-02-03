import SearchBar from 'components/SearchBar';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useAppSelector } from 'redux/hooks';
import { useCategoriesActions } from '../../data/categories';
import { Product, useProductsActions } from '../../data/products';
import { Strings } from 'utils/strings';
import styles from './styles';
import Chip, { LoadingChip } from 'components/Chip';
import { Colors } from 'utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from 'components/ProductCard';
const loadingChipSkeletons:React.ReactNode = [<LoadingChip/>,<LoadingChip/>,<LoadingChip/>];

export default function HomeScreen() {

  const [searchValue, setSearchValue] = useState('');
  const CategoriesActions = useCategoriesActions();
  const ProductsActions = useProductsActions();
  const { categoriesList, loadingCategories } = useAppSelector(state => state.categories);
  const { defaultProductsList, loadingProducts } = useAppSelector(state => state.products);
  const [ filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  let currentProductList:Product[] = filteredProducts.length > 0 ? filteredProducts : defaultProductsList;

  useEffect(()=>{
    CategoriesActions.fetchAllCategories();
    ProductsActions.fetchDefaultProductsList();
  },[])

  const renderMasonryRow = ({item,index}:{item:Product,index:number}) => {

    if(index === 0){
      return <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column', flex: 1}}>
          {currentProductList[0] && <ProductCard product={currentProductList[0]}/>}
          {currentProductList[1] && <ProductCard product={currentProductList[1]}/>}
        </View>
        {currentProductList[2] && <ProductCard style={{flex:1}} product={currentProductList[2]}/>}
      </View>
    }
    if(index > 2){
      return <View style={{flexDirection:'row'}}>
        {currentProductList[index] && index % 2 === 0 && <ProductCard product={currentProductList[index]}/>}
        {currentProductList[index + 1] && index % 2 === 0 && <ProductCard product={currentProductList[index + 1]}/>}
      </View>
    }
    return null;
  }


  return (<SafeAreaView style={styles.container}>
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
    <FlatList
      renderItem={renderMasonryRow}
      data={currentProductList}
    />
    
  </SafeAreaView>)
}
