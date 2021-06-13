import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import Registration from '../Registration/Registration';
import Users from '../Users/Users';
import Reports from '../Reports/Reports';

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
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <DrawerContent.Screen name="Registration" component={Registration} />
            <DrawerContent.Screen name="Users" component={Users} />
            <DrawerContent.Screen name="Reports" component={Reports} />
        </DrawerContent.Navigator>
    )
}

