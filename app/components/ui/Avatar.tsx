import { AvatarType } from '@/src/utils/zodSchemas/Schema';
import { Text, View } from 'react-native';

function Avatar({ data }: { data: AvatarType }) {
  const colors = [
    'bg-blue-500', 'bg-red-500', 'bg-green-500', 
    'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'
  ];

  // Generowanie koloru na podstawie sumy kodów znaków imienia i nazwiska
  const colorIndex = (data.name.charCodeAt(0) + data.vorname.charCodeAt(0)) % colors.length;
  const bgColor = colors[colorIndex];

  const sizes = {
    sm: {
      fontSize: "text-xs",
      dimensions: "h-8 w-8"
    },
    md: {
      fontSize: "text-base",
      dimensions: "h-12 w-12"
    },
    lg: {
      fontSize: "text-2xl",
      dimensions: "h-20 w-20"
    },
  };

  return (
    <View className={`
      rounded-full flex items-center justify-center border-1 border-white text-white font-medium uppercase
      ${sizes[data.size].dimensions} 
      ${bgColor}
    `}>
      <Text className={sizes[data.size].fontSize}>
        {data.name[0]}{data.vorname[0]}
      </Text>
    </View>
  );
}

export default Avatar;