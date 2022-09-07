import clsx from 'clsx';
import { ChangeEventHandler } from 'react';
import classes from './MainInput.module.scss';

interface MainInputProps {
  placeholder?: string,
  className?: string,
  value?: string | number,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

export const MainInput: React.FC<MainInputProps> = ({
  placeholder = 'Input',
  className,
  value,
  onChange,
}) => {
  const inputClasses: string = clsx(
    className,
    classes.base_input,
  );
  return (
    <input
      className={inputClasses}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
