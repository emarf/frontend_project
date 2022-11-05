import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import LightThemeIcon from 'shared/assets/svg/light-theme-icon.svg';
import DarkThemeIcon from 'shared/assets/svg/dark-theme-icon.svg';
import Button from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }:ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
      <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
        {theme === Theme.LIGHT ? <LightThemeIcon fill="yellow"/> : <DarkThemeIcon fill="yellow"/>}
      </Button>
  );
};

export default ThemeSwitcher;
