import { AlertType } from '@/src/utils/zodSchemas/Schema';
import { X } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

const Alert = ({ data, onClose }: { data: AlertType; onClose?: () => void }) => {
  const colorMap = {
    success: {
      container: 'bg-success-light border-success',
      text: 'text-success-dark',
    },
    error: {
      container: 'bg-error-light border-error',
      text: 'text-error-dark',
    },
    info: {
      container: 'bg-primary-light border-primary',
      text: 'text-primary-dark',
    },
  };

  const theme = colorMap[data.type] || colorMap.info;

  return (
    <View className={`flex-row justify-between items-center p-4 border-l-4 rounded-md shadow-sm ${theme.container} w-full max-w-md`}>
      <View className="flex-1">
        <Text className={`text-sm font-semibold ${theme.text}`}>
          {data.text}
        </Text>
      </View>
      
      {onClose && (
        <TouchableOpacity 
          onPress={onClose}
          className="ml-4 p-1 active:opacity-50"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <X size={18} color="currentColor" className={theme.text} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Alert;