import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../pages/HomePage';
import TrackList from '../pages/TrackList';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="HomePage" component={HomePage} />
            <AppStack.Screen name="TrackList" component={TrackList} />
        </AppStack.Navigator>
    )
}

export default Routes; 