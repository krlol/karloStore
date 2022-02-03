import { StyleSheet } from 'react-native';
import { Colors } from 'utils/colors';

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        borderColor: Colors.PrimaryColor,
        borderWidth: 1,
        margin: 5,
        flexDirection: 'column',
        flex: 1
    },
    image:{
        flex: 1,
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    circle:{
        height: 20,
        borderWidth: 1,
        borderColor: Colors.PrimaryColor,
        borderRadius: 12.5,
        justifyContent: 'center',
        flex:0.5,
        marginRight: 3,
    },
    productContent:{
        paddingHorizontal:10,
        paddingVertical:8,
        paddingLeft: 3,
        flexDirection:'row',
        alignItems: 'center',
    },
    iconText:{
        fontSize: 10,
        textAlign: 'center'
    },
    productTitle:{
        marginLeft:0,
        fontWeight: 'bold',
        fontSize: 10,
    },
    productCategory:{
        marginLeft: 0,
        marginTop: 1,
        fontWeight: '100',
        fontSize: 10,
    },
    productInfo: {
        flex: 3,
    },
    productPrice:{
        marginTop: 1,
        fontWeight: '300',
        fontSize: 10,
        marginLeft: 3,
    },
})

export default styles;