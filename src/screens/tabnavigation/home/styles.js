import {StyleSheet} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import {colors} from '../../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        position: 'relative',
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        position: 'relative',
        fontWeight: 'bold',
        top: 40,
        left: 20,
    },
    geolocation: {
        backgroundColor: colors.primary_light,
        padding: 20,
        borderRadius: 15,
        height: 100,
        position: 'relative',
        top: 210,
        flexDirection: 'row',
       
    },
    geolocationTitle: {
        color: "#4F4F4F",
        // paddingVertical: 5,
    },
    favorites: {
        width: 340,
        padding: 20,
        backgroundColor: colors.secondary,
        height: 100,
    },
    favoritesTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    favoritesTopText: {
        fontWeight: '500',
        marginLeft: 10,
        fontSize: 15,
    },
    addFavorite: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        backgroundColor: '#F9F9F9',
        padding: 10,
    }
});


