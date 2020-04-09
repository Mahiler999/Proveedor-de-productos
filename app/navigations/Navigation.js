import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreenStack from "./AccountStack";

const size = 23;
const NavigationStacks = createMaterialBottomTabNavigator(
  {
    Account: {
      screen: AccountScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="account-outline"
            size={size}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    //initialRouteName: "Liquors",
    order: ["Account"],
    activeColor: "#f0615a",
    inactiveColor: "#190976",
    barStyle: { backgroundColor: "#FAFAFA" },
  }
);

export default createAppContainer(NavigationStacks);
