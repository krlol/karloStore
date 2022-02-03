import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { ICustomViewStyle } from 'react-native-skeleton-content-nonexpo/lib/Constants';
import { Product } from 'src/data/products';
import { formatPriceNumber } from 'utils/helpers';
import { Strings } from 'utils/strings';
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
    <TouchableOpacity style={[styles.container, style]}>
      <Image style={styles.image} source={{uri:product.image}} />
      <View style={styles.productContent}>
        <View style={styles.circle}><Text style={styles.iconText}>{Strings.ShoppingEmoji}</Text></View>
        <View style={styles.productInfo}>
          <Text numberOfLines={2} style={styles.productTitle}>{product.title}</Text>
          <Text numberOfLines={1} style={styles.productCategory}>{product.category.category}</Text>
        </View>
        <Text style={styles.productPrice}>{formatPriceNumber(product.price)}</Text>
      </View>
    </TouchableOpacity>
  )
}
