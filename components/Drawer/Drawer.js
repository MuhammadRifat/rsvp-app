import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { firstScreenStack, secondScreenStack, thirdScreenStack } from '../ScreenStack/ScreenStack';

const DrawerContent = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close"
                onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
            />
        </DrawerContentScrollView>
    );
}

export default function Drawer() {
    return (
        <DrawerContent.Navigator
            drawerContentOptions={{
                activeTintColor: '#e91e63',
            }}
            drawerStyle={{
                backgroundColor: '#ffe6e6',
              }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <DrawerContent.Screen name="Registration" component={firstScreenStack} />
            <DrawerContent.Screen name="Users" component={secondScreenStack} />
            <DrawerContent.Screen name="Reports" component={thirdScreenStack} />
        </DrawerContent.Navigator>
    )
}

