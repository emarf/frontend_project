import { classNames } from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import LangSwitchIcon from 'shared/assets/svg/lang-switcher-icon.svg'
import Button from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }:LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleTranslate = () => {
    console.log('i18n.language',i18n.language)
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggleTranslate}>
      <LangSwitchIcon />
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
