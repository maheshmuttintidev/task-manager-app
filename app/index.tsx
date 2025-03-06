import { Text, View, useColorScheme } from "react-native";

import { Link } from "expo-router";
import { textColor } from "@/typography";

export default function Index() {
  const colorScheme = useColorScheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 16
      }}
    >
      <Text style={{fontSize: 24, fontWeight: 700, color: textColor(colorScheme as string)}}>Welcome to Task Manager</Text>
      <Link href={'/auth/login'} style={{backgroundColor: '#891919', color: 'white', fontSize: 18, padding: 12, borderRadius: 12, width: '100%', textAlign: 'center'}}>Login</Link>
    </View>
  );
}
