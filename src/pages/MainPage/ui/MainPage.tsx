import { useTranslation } from 'react-i18next';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }:MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={`${className}`}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
