import React from 'react';
import { Image, Text, View } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { ICustomViewStyle } from 'react-native-skeleton-content-nonexpo/lib/Constants';
import { Product } from 'src/data/products';
import styles from './styles';

export interface ProductCardProps {
  product: Product
  style?: object
}

const loadingProductLayout:ICustomViewStyle[] = [{height:150, width:`95%`, margin:5 ,borderTopRightRadius:20, borderTopLeftRadius:20},{width:'60%',height:30, marginBottom:10,marginLeft: 5}];

export const LoadingProductCard = () => {
  return <SkeletonContent containerStyle={[styles.container]} layout={loadingProductLayout} isLoading={true} />
}

export default function ProductCard({product, style}:ProductCardProps) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{uri:product.image}} />
    </View>
  )
}
