# Steps
1.  expo init CameraExample
2.  cd CameraExample
3.  expo install expo-barcode-scanner

https://docs.expo.io/versions/latest/sdk/bar-code-scanner/

# modification
1.  mkdir Screens
2.  touch Screens/Home.js
3.  touch Screens/Scanner.js
4.  touch Screens/About.js

# Adding in navigation
1.  npm install react-navigation react-navigation-stack react-navigation-tabs
2.  npm audit fix
3.  error encountered
    - Unable to resolve "react-native-screens" from "node_modules/react-navigation-tabs/lib/module/navigators/createBottomTabNavigator.js"
4.  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view