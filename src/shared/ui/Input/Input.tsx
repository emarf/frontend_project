import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  autofocus?: boolean;
}

const Input = memo((props: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    useEffect(() => {
        if (autofocus) {
            setIsFocus(true);
            ref.current.focus();
        }
    }, [autofocus]);

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    const onFocus = useCallback(() => {
        setIsFocus(true);
    }, []);

    const onBlur = useCallback(() => {
        setIsFocus(false);
    }, []);

    const onSelect = useCallback((e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    }, []);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={handleOnChange}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocus && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});

export default Input;
