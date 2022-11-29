import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightThemeIcon from 'shared/assets/svg/light-theme-icon.svg';
import DarkThemeIcon from 'shared/assets/svg/dark-theme-icon.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }:ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ButtonTheme.OUTLINE}
        >
            {theme === Theme.LIGHT
                ? <LightThemeIcon />
                : <DarkThemeIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
