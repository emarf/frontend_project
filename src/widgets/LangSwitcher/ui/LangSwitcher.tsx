import { classNames } from 'shared/lib/classNames/classNames';
import LangSwitchIcon from 'shared/assets/svg/lang-switcher-icon.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short: boolean;
}

const LangSwitcher = ({ className, short }:LangSwitcherProps) => {
    const { t, i18n } = useTranslation('LangSwitcher');

    const toggleTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.OUTLINE}
            onClick={toggleTranslate}
        >
            <LangSwitchIcon />
            { t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};

export default LangSwitcher;
