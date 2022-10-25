import type { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import type { FieldWrapperPassThroughProps } from "./FieldWrapper";
import { memo } from "react";
import FieldWrapper from "./FieldWrapper";
import LinkElement from "@components/Common/Link/index";

type InputFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  name: string;
  defaultValue?: any;
  id: string;
  w50?: boolean;
  w75?: boolean;
  w100?: boolean;
  w50m?: boolean;
  w75m?: boolean;
  w100m?: boolean;
  label: string;
  onChange?: any;
  onFocus?: any;
  onKeyDown?: any;
  onClick?(): any;
  autoComplete?: string;
  href?: string;
  textUrl?: string;
};

const InputCheckbox = (props: InputFieldProps) => {
  const {
    label,
    className,
    registration,
    error,
    defaultValue,
    name,
    id,
    w50,
    w75,
    w100,
    href,
    textUrl,
    w50m,
    w75m,
    w100m,
    onClick
  } = props;
  return (
    <FieldWrapper formCheck={true} htmlFor={id} label={label} error={error}>
      <input
        {...registration}
        className={clsx("form-check-input", className)}
        type={"checkbox"}
        id={id}
        name={name}
        onClick={onClick}
        defaultValue={defaultValue}
        w-50={w50 ? "true" : null}
        w-75={w75 ? "true" : null}
        w-100={w100 ? "true" : null}
        w-50-m={w50m ? "true" : null}
        w-75-m={w75m ? "true" : null}
        w-100-m={w100m ? "true" : null}
      />
      <label
      onClick={()=>{
        document.getElementById(id)?.click();
      }}
      className="form-check-label" htmlFor="terms">
        {label}
        {href && <LinkElement href={href}>{textUrl}</LinkElement>}
      </label>
    </FieldWrapper>
  );
};
export default memo(InputCheckbox);
