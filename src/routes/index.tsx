import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../pages/HomePage';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="HomePage" component={HomePage} />
        </AppStack.Navigator>
    )
}

export default Routes; 