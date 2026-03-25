import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

const Input = ({ label, error, ...props }: InputProps) => {
  const isError = !!error;
  const isDisabled = props.editable === false || props.readOnly === true;

  return (
    <View className="flex flex-col gap-1.5 w-full mb-3">
      <Text className="text-sm font-medium text-gray-700">
        {label}
      </Text>
      
      <TextInput
        {...props}
        className={`
          px-3 py-2 bg-white border rounded-md
          ${isError 
            ? 'border-red-500' 
            : 'border-gray-300 focus:border-blue-500'
          }
          ${isDisabled ? 'bg-gray-50 opacity-50' : ''}
        `}
        placeholderTextColor="#9ca3af"
      />

      {isError && (
        <Text className="text-xs text-red-600 mt-1">
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;