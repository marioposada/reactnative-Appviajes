import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';


const AppNavigator = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContainer>
            {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}