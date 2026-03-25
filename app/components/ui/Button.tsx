import { validationMiddleware } from '@/src/middlewares/validationMiddleware';
import { ButtonSchema, ButtonType } from '@/src/utils/zodSchemas/Schema';
import { useTranslation } from "react-i18next";
import { Pressable, Text } from 'react-native';
import Spinner from './Spinner';

const Button = ({ data }: { data: ButtonType}) => {
  const dataCheck = validationMiddleware(ButtonSchema, data);
  const { t } = useTranslation();

  const color = {
    primary: "bg-primary active:bg-primary-dark", 
    secondary: "bg-secondary active:bg-secondary-light", 
    danger: "bg-error active:bg-error-dark" 
  };

  const sizes = {
    sm: {
      padding: "px-6 py-2",
      fontSize: "text-sm",
      spinner: "h-6 w-6"
    },
    md:{
      padding: "px-8 py-4",
      fontSize: "text-lg",
      spinner: "h-8 w-8"
    },
    lg:{
      padding: "px-10 py-4",
      fontSize: "text-xl",
      spinner: "h-10 w-10"
    },
  };

  const currentSize = sizes[dataCheck.size] || sizes.md;
  const currentColor = color[dataCheck.variant] || color.primary;

  return (
    <Pressable
      disabled={dataCheck.disabled || dataCheck.isLoading}
      className={`
        ${currentSize.padding} 
        ${currentColor} 
        rounded-md transition-all duration-500 
        flex items-center justify-center
        disabled:opacity-50
      `}
    >
      {dataCheck.isLoading ? (
        <Spinner data={currentSize.spinner} />
      ) : (
        <Text className={`${currentSize.fontSize} font-bold text-text-primary`}>
          {t(dataCheck.content)}
        </Text>
      )}
    </Pressable>
  );
}

export default Button;