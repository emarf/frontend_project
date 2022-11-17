import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation('error');
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Извините, произошла ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Перезагрузка страницы')}
            </Button>
        </div>
    );
};

export default PageError;
