import { StyleSheet } from 'react-native';
import { ICustomViewStyle } from 'react-native-skeleton-content-nonexpo/lib/Constants';
import { Colors } from 'utils/colors';

export const loadingProductDetail:ICustomViewStyle[] = [{width:'100%',height:300, borderRadius: 30},{width:290,height:30,marginTop:10},{width:100,height:30,marginTop:10}];

const styles = StyleSheet.create({
    scrollView:{
        marginTop: 30,
        flex: 1,
    },
    image:{
        borderRadius:30,
        flex:1,
        margin:5,
        borderColor: Colors.PrimaryColor,
        height: 300,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        margin:10,
        flex:3
    },
    price:{
        fontWeight: '200',
        fontSize: 20,
        margin:10,
        flex:1
    },
    textRow:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    desc:{
        fontWeight: '200',
        fontSize: 14,
        margin:10,
        flex:1
    },
    categoryTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        margin:10,
        flex:3
    },
    categoryChip:{
        maxWidth:'30%',
        marginHorizontal: 10,
    }
})

export default styles;