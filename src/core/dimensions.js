import { Dimensions } from "react-native";

// obtains screen dimensions
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);