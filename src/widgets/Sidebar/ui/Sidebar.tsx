import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import HomeIcon from 'shared/assets/svg/home-icon.svg';
import InfoIcon from 'shared/assets/svg/info-icon.svg';
import { RouterPath } from 'shared/config/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const initialSidebarCollapsedState = JSON.parse(localStorage.getItem('sidebar-collapsed'));

const Sidebar = ({ className }:SidebarProps) => {
    const { t } = useTranslation('sidebar');
    const [collapsed, setCollapsed] = useState<boolean>(initialSidebarCollapsedState || false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
        localStorage.setItem('sidebar-collapsed', JSON.stringify(!collapsed));
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RouterPath.main}
                    className={cls.item}
                >
                    <HomeIcon className={cls.linkIcon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RouterPath.about}
                    className={cls.item}
                >
                    <InfoIcon className={cls.linkIcon} />
                    <span className={cls.link}>
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.sidebarActions}>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher short={collapsed} />
                </div>
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={handleCollapse}
                    className={cls.collapseBtn}
                    size={ButtonSize.L}
                >
                    {collapsed ? '<' : `> ${t('Свернуть сайдбар')}`}
                </Button>
            </div>

        </div>
    );
};

export default Sidebar;
