import HelloWorld from "@/app/components/HelloWorld";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import Alert from "./components/ui/Alert";
import Avatar from "./components/ui/Avatar";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

export default function Index() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <HelloWorld />
      <Avatar data={{size: "sm", name: "Jan", vorname: "Kowalski"}} />
      <Button data={{variant: "primary", size: "sm", content: t('like'), isLoading: false, disabled: false,}}/>
      <Button data={{variant: "primary", size: "sm", content: t('comment'), isLoading: false, disabled: false,}}/>
      <Input id="2" label="Adres email"/>
      <Alert data={{type: "info", text: "info"}} />
      <Alert data={{type: "error", text: "error"}} /> 
      <Alert data={{type: "success", text: "success"}} />
    </View>
  );
}
