import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData, userActions } from '../../../entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation('navigation');
    const [isOpenAuth, setOpenAuth] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const handleOpenAuthModal = useCallback(() => {
        setOpenAuth(true);
    }, []);

    const handleCloseAuthModal = useCallback(() => {
        setOpenAuth(false);
    }, []);

    const handleLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    onClick={handleLogout}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={handleOpenAuthModal}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isOpenAuth} onClose={handleCloseAuthModal} />
        </div>
    );
};

export default Navbar;
