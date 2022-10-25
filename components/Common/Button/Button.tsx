import clsx from 'clsx';
import * as React from 'react';
import { memo } from "react";
import Spinner from '@components/Common/Spinner/index';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-gray-50:text-blue-600',
  inverse: 'bg-white text-blue-600 hover:bg-blue-600:text-white',
  danger: 'bg-red-600 text-white hover:bg-red-50:text-red-600',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly variant?: keyof typeof variants;
  readonly size?: keyof typeof sizes;
  readonly isLoading?: boolean;
  readonly pillPrimary?: boolean;
  readonly pillSecondary?: boolean;
  readonly isDisabled?: boolean;
  readonly w50?: boolean
  readonly w100?: boolean
  readonly w100m?: boolean
  readonly bet?: boolean;
  readonly className?: string;
  selected?: boolean;
} & IconProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = '',
      size = '',
      isLoading = false,
      startIcon,
      endIcon,
      pillPrimary,
      pillSecondary,
      isDisabled,
      w50,
      w100,
      w100m,
      bet,
      selected,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        pill-primary={pillPrimary ? "true" : null}
        pill-secondary={pillSecondary ? "true" : null}
        bet={bet ? "true" : null}
        disabled={isDisabled}
        w-50={w50 ? "true" : null}
        w-100={w100 ? "true" : null}
        w-100-m={w100m ? "true" : null}
        selected={selected ? "true" : null}
        className={clsx(
          '',
          className
        )}
        {...props}
      >
        {isLoading &&<Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default memo(Button);
