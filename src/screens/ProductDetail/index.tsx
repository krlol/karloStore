import { useNavigation, useNavigationState } from '@react-navigation/native';
import BackButton from 'navigation/components/BackButton';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getSingleProduct, Product } from '../../data/products';
import { Strings } from 'utils/strings';
import styles, { loadingProductDetail } from './styles';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { formatPriceNumber } from 'utils/helpers';
import Chip from 'components/Chip';
import { Colors } from 'utils/colors';
const LoadingProductDetail = () => {
  return <SkeletonContent containerStyle={{padding:10}} layout={loadingProductDetail} isLoading={true} />
}

export default function ProductDetailSCreen({navigation,route}: any) {
  
  const [product,setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);
  const { productId } = route.params;

  useEffect(()=>{
    if(productId){
      setLoading(true)
      getSingleProduct(productId as number).then((productRes)=>{
        setLoading(false)
        setProduct(productRes)
      }).catch((e)=>{
        setLoading(false)
        console.error(e)
      })
    }
  },[productId])


  return (
    <>
      <ScrollView style={styles.scrollView}>
        {loading ? <LoadingProductDetail /> : (
          <View>
            <Image style={styles.image} source={{uri:product?.image}} />
            <View style={styles.textRow}>
              <Text numberOfLines={4} style={styles.title}>{product?.title}</Text>
              <Text numberOfLines={4} style={styles.price}>{formatPriceNumber(product?.price || 0)}</Text>
            </View>
            <Text style={styles.desc}>{product?.description}</Text>
            <Text numberOfLines={4} style={styles.categoryTitle}>{Strings.Categories}</Text>
            <Chip style={styles.categoryChip} backgroundColor={Colors.FifthColor} title={product?.category.category || ""} />
          </View>
        )}
      </ScrollView>
      <BackButton navigation={navigation}/>
    </>
  )
}
