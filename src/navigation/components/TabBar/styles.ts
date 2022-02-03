import { StyleSheet } from 'react-native';
import { Colors } from 'utils/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 30,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 20,
        padding: 15,
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 2,
        justifyContent:'space-between',
        borderColor: Colors.PrimaryColor,
        borderWidth: 1
      },
      tabButton: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.SecondaryColor,
        borderRadius: 25,
        padding: 5,
      },
})

export default styles;