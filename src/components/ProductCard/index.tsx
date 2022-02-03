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

const loadingProductLayout:ICustomViewStyle[] = [{width:100,height:30,marginRight:10,borderRadius:10}];

export const LoadingProductCard = () => {
  return <SkeletonContent layout={loadingProductLayout} isLoading={true} />
}

export default function ProductCard({product, style}:ProductCardProps) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{uri:product.image}} />
    </View>
  )
}
