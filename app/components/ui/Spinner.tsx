import { SpinnerType } from '@/src/utils/zodSchemas/Schema';
import { useTranslation } from "react-i18next";
import { Text, View } from 'react-native';

const Spinner = ({ data }: { data:  SpinnerType}) => {
    const { t } = useTranslation();

    return (
        <View className={`${data} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}>
          <Text className="sr-only">{t('loading')}...</Text>
        </View>
    );
}

export default Spinner