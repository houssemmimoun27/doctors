import React from 'react';
import { View, Platform } from 'react-native';
import { SimpleLineIcons, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from "../constants";
import { Create, Home, Messages, Profile, Settings} from "../screens";
import { FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 50,
        backgroundColor: COLORS.white
    }
}



const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return(
                        <SimpleLineIcons
                            name='home'
                            size={24}
                            color={focused ? COLORS.primary : COLORS.black}
                        />
                    )
                  }
                }}
            />

            <Tab.Screen
                name='Messages'
                component={Messages}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name='message-text-outline'
                            size={24}
                            color={focused ? COLORS.primary : COLORS.black}
                        />
                    )
                }}
            />
<Tab.Screen
  name="Create"
  component={Create}
  options={{
    tabBarIcon: ({ focused }) => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.vert,
          height: Platform.OS === 'ios' ? 50 : 60,
          width: Platform.OS === 'ios' ? 50 : 60,
          top: Platform.OS === 'ios' ? -10 : -20,
          borderRadius: Platform.OS === "ios" ? 25 : 30,
          borderWidth: 2,
          borderColor: COLORS.white
        }}
      >
        <FontAwesome // Change to FontAwesome and use a search icon
          name='search'
          size={24}
          color={COLORS.white}
        />
      </View>
    )
  }}
/>

            <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <MaterialIcons
                                name='settings'
                                size={24}
                                color={focused ? COLORS.primary : COLORS.black}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name='person-outline'
                            size={24}
                            color={focused ? COLORS.primary : COLORS.black}
                        />
                    )
                }}
            />
            
           

        </Tab.Navigator>
    );
};

export default BottomTabNav;
