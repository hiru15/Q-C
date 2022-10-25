import clsx from 'clsx';
import * as React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { memo } from "react";
import type { FieldWrapperPassThroughProps } from './FieldWrapper';
import FieldWrapper from './FieldWrapper';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

const SelectField = (props: SelectFieldProps) => {
  const {
    label,
    options,
    error,
    className,
    defaultValue,
    registration,
    placeholder,
  } = props;
  return (
    <FieldWrapper htmlFor={label} label={label} error={error}>
      <select
        placeholder={placeholder}
        name="location"
        className={clsx(
          '',
          className
        )}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
export default memo(SelectField);
