import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation('navigation');
    return (
        <div className={classNames(cls.Navbar, {}, [className])} />
    );
};

export default Navbar;
