import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
  className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div className={`${className}`}>
            {t('О сайте')}
            <Counter />
        </div>
    );
};

export default AboutPage;
