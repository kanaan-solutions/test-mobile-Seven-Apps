import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Playlist from '../pages/Playlist';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Playlist" component={Playlist} />
        </AppStack.Navigator>
    )
}

export default Routes; 