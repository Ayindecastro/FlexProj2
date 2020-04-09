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
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
);

export default createAppContainer(Router);
