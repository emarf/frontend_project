import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const initialSidebarCollapsedState = JSON.parse(localStorage.getItem('sidebar-collapsed'));

const Sidebar = ({ className }:SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(initialSidebarCollapsedState || false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    localStorage.setItem('sidebar-collapsed', JSON.stringify(!collapsed));
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={handleCollapse}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
