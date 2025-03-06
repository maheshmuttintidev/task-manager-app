import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";

import { AuthProvider } from "@/context/AuthProvider";
import { TaskProvider } from "@/context/TaskProvider";
import { useColorScheme } from "react-native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

        const colorScheme = useColorScheme()
    useEffect(() => {
            SplashScreen.hideAsync();
        
    }, []);

    
  return (
  
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AuthProvider>
                <TaskProvider>
                        <Stack screenOptions={{headerShown: false}}/>
                </TaskProvider>
        </AuthProvider>
        </ThemeProvider>
        )
}
