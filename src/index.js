import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  AuthLoadingScreen,
  ChatScreen,
  Dashboard,
  ForgotPasswordScreen,
  FriendScreen,
  HomeScreen,
  LoginScreen,
  MyProfileScreen,
  ProfileScreen,
  RegisterScreen,
  SettingsScreen,
  TradingScreen,
  TestScreen,
} from "./screens";

const Router = createStackNavigator (
  {
    AuthLoadingScreen,
    ChatScreen,
    Dashboard,
    ForgotPasswordScreen,
    FriendScreen,
    HomeScreen,
    LoginScreen,
    MyProfileScreen,
    ProfileScreen,
    RegisterScreen,
    SettingsScreen,
    TradingScreen,
    TestScreen,
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none",
    swipeEnabled: false,
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default createAppContainer(Router);
