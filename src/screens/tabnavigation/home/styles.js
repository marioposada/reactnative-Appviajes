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
        backgroundColor: colors.secondary_mayor,
        padding: 20,
        borderRadius: 15,
        height: 100,
        position: 'relative',
        bottom: 80,
        flexDirection: 'row',
       
    },
    geolocationTitle: {
        color: colors.transparent,
        // paddingVertical: 5,
    }
});


