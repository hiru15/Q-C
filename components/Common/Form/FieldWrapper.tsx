import clsx from 'clsx';
import * as React from 'react';
import type { FieldError } from 'react-hook-form';
import { memo } from "react";
type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
  htmlFor: string;
  formCheck?: boolean;
  includeBadge?: boolean;
};
export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;
const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children, htmlFor, formCheck, includeBadge } = props;
  return (
    <div
    include-badge={includeBadge ? "true" : null}
    className={clsx(`form-group ${formCheck ? 'form-check' : '' }`, className)}
    error={error && 'true'}
    >
      {!formCheck && (<label
        htmlFor={htmlFor}
      >
        {label}
      </label>)}
      {children}
      {error?.message && (
        <div role="alert" aria-label={error.message} className="error">
          {error.message}
        </div>
      )}
    </div>
  );
};
export default memo(FieldWrapper);
