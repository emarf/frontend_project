import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }:MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={`${className || ''}`}>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
