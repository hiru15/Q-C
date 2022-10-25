import type { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import type { FieldWrapperPassThroughProps } from "./FieldWrapper";
import FieldWrapper from "./FieldWrapper";
import { memo } from "react";

export type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password" | "number";
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  placeholder: string;
  name: string;
  defaultValue?: any;
  id?: string;
  w50?: boolean;
  w75?: boolean;
  w100?: boolean;
  w50m?: boolean;
  w75m?: boolean;
  w100m?: boolean;
  label?: string;
  onChange?: any;
  onFocus?: any;
  onKeyDown?: any;
  autoComplete?: string;
  formCheck?: boolean;
  readOnly?: boolean;
  classNameWrapper?: string;
  style?:any;
  withWrapper?: boolean;
  disabled?: boolean;
  value?: any;
};

const InputField = (props: InputFieldProps) => {
  const {
    type = "text",
    label,
    className,
    registration,
    error,
    defaultValue,
    value,
    placeholder,
    name,
    id,
    w50,
    w75,
    w100,
    w50m,
    w75m,
    w100m,
    readOnly,
    onChange,
    classNameWrapper,
    style,
    withWrapper = true,
    disabled = false
  } = props;
  return (
    withWrapper ? (
      <FieldWrapper
        className={classNameWrapper}
        formCheck={false}
        htmlFor={id}
        label={label}
        error={error}
      >
        <input
          {...registration}
          {...style}
          className={clsx("", className)}
          type={type}
          id={id}
          name={name}
          value={value}
          readOnly={readOnly}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          w-50={w50 ? "true" : null}
          w-75={w75 ? "true" : null}
          w-100={w100 ? "true" : null}
          w-50-m={w50m ? "true" : null}
          w-75-m={w75m ? "true" : null}
          w-100-m={w100m ? "true" : null}
        />
      </FieldWrapper>
    ) : (
      <>
      <input
        {...registration}
        style={style}
        className={clsx("", className)}
        type={type}
        id={id}
        name={name}
        value={value}
        readOnly={readOnly}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        w-50={w50 ? "true" : null}
        w-75={w75 ? "true" : null}
        w-100={w100 ? "true" : null}
        w-50-m={w50m ? "true" : null}
        w-75-m={w75m ? "true" : null}
        w-100-m={w100m ? "true" : null}
      />
      {error?.message && (
        <div role="alert" aria-label={error.message} className="error">
          {error.message}
        </div>
      )}
      </>
    )
  );
};
export default memo(InputField);
