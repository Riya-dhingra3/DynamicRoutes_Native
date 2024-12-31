import { Link, router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView>
      <Text onPress={() => router.push('/about')}>About</Text>
      <Link
        href={{
          pathname: "/user/[id]",
          params: { id: "bacon" },
        }}
      >
        View User
      </Link>
      <Link replace href="/user">About</Link>
    </SafeAreaView>
  );
}
