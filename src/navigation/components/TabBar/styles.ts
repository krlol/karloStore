import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 40,
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
      },
      tabButton: {
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      tabLabel: {
        fontSize: 12,
        fontWeight: '700',
      },
})

export default styles;