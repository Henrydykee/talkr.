import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SearchScreen from "./features/search/pages/search_screen";
import NotificationScreen from "./features/notification/pages/notification_screen";
import MessagesScreen from "./features/messages/pages/message_screen";// Import SplashScreen
import { Ionicons } from "@expo/vector-icons";
import SplashScreen from "./features/onboarding/spalsh_screen";
import LoginScreen from "./features/onboarding/auth/presentation/login_screen";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import HomeScreen from "./features/home/presentation/pages/homes_screen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.white },
        headerTintColor: "black",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarStyle: { backgroundColor: Colors.white },
        tabBarActiveTintColor: Colors.black,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Ionicons name="search" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "Notification",
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessagesScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => <Ionicons name="mail" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}> 

      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      
      </Provider>

    </>
  );
}
