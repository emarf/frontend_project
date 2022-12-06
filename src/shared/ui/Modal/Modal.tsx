import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isModalOpen: boolean;
  onClose: () => void;
}

const Modal = ({
    className, children, isModalOpen, onClose,
}:ModalProps) => {
    const [isModalClosing, setModalClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleCloseModal = useCallback(() => {
        if (onClose) {
            setModalClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setModalClosing(false);
            }, 200);
        }
    }, [onClose]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    }, [handleCloseModal]);

    useEffect(
        () => {
            if (isModalOpen) {
                window.addEventListener('keydown', handleKeyDown);
            }

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                clearInterval(timerRef.current);
            };
        },
        [handleKeyDown, isModalOpen],
    );

    const handleClickContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods = {
        [cls.opened]: isModalOpen,
        [cls.isClosing]: isModalClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleCloseModal}>
                    <div className={cls.content} onClick={handleClickContent}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
