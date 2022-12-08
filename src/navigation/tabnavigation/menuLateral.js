import { createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import {View, Button} from 'react-native'
// import TabNavigator from './tab';
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function NotificationsScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back2 home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
    return (
        <Drawer.Navigator
            initialRouteName="TabNavigator"
            screenOptions={{
                headerShown: false,                
              }}
            // drawerContent = {(props) => <MenuInterno />}
        >
          <Drawer.Screen name="TabNavigator" component={NotificationsScreen} /> 
          <Drawer.Screen name="TabNavigator2" component={NotificationsScreen2} /> 
          {/* <Drawer.Screen name="TabNavigator" component={TabNavigator} />  */}
          {/* <Drawer.Screen name="Settings" component={Settings} />  */}
        </Drawer.Navigator>
      );
}
export default MenuLateral;

// const MenuInterno = ({navigation}) => {

//     return (
//      <DrawerContentScrollView>
//        {/* Parte del avatar */}
//        <View style={styles.avatarContainer}>
//          <Image 
//            source={{
//              uri: 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'
//            }}
//            style={styles.avatar}
//          />
//        </View>
//        {/* Opciones de menú */}
//        <View style = {styles.menuContainer}>
 
//          <TouchableOpacity
//            style={styles.menuBottom}
//         //    onPress={() => {navigation.navigate("StackNavigator")}}
//          >
//            <Text style={styles.menuText}>Navegacion</Text>
//          </TouchableOpacity>
 
//          <TouchableOpacity
//            style={styles.menuBottom}
//         //    onPress={() => {navigation.navigate("Settings")}}
//          >
//            <Text style={styles.menuText}>Ajustess</Text>
//          </TouchableOpacity>
 
//        </View>
//      </DrawerContentScrollView>
//     )
//  }