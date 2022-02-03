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
    }
})

export default styles;