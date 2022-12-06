import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation('navigation');
    const [isOpenAuth, setOpenAuth] = useState<boolean>(false);

    const handleOpenAuthModal = () => {
        setOpenAuth(true);
    };

    const handleCloseAuthModal = () => {
        setOpenAuth(false);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={handleOpenAuthModal}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <Modal isModalOpen={isOpenAuth} onClose={handleCloseAuthModal}>
                {t(`Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Maxime autem eveniet laudantium delectus,
                modi illum placeat beatae, ut voluptatibus in, distinctio cumque deserunt
                iste quod officia ipsam laborum ipsa repellendus.`)}
            </Modal>
        </div>
    );
};

export default Navbar;
