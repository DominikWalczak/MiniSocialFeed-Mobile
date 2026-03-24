import HelloWorld from "@/app/components/HelloWorld";
import { View } from "react-native";
import Avatar from "./components/ui/Avatar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <HelloWorld />
      <Avatar data={{size: "sm", name: "Jan", vorname: "Kowalski"}} />
    </View>
  );
}
