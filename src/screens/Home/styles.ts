import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        paddingTop: 25,
        marginHorizontal: 15,
    },
    headerContainer:{

    },
    chipsContainer:{
        flexDirection: 'row',
        marginVertical: 10,
    },
    productsContainer:{
        flexDirection: 'row',
    },
    scrollView:{
        marginBottom:80
    },
    productRow:{
        flexDirection:'row'
    },
    productColumn:{
        flexDirection:'column', 
        flex: 1
    },
    largeProductCard:{
        flex:1
    }
})

export default styles;