import type { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import ShowNumberFormat from '@components/Common/NumberFormat';
import { Controller } from "react-hook-form";
import { useAppSelector } from "@clean/application/redux/hook";
import type { FieldWrapperPassThroughProps } from "./FieldWrapper";
import FieldWrapper from "./FieldWrapper";
import CurrencyInput from "react-currency-input-field";
import { memo } from "react";
export type InputFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  placeholder: string;
  name: string;
  defaultValue?: any;
  id?: string;
  w30?: boolean;
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
  style?: any;
  withWrapper?: boolean;
  disabled?: boolean;
  value?: any;
  prefix: any;
  step: any;
  min: any;
  max: any;
  control: any,
  minWithdrawal: any,
  maxWithdrawal: any,
  showSmallText: boolean
};
const InputField = (props: InputFieldProps) => {
  const {
    label,
    className,
    registration,
    error,
    defaultValue,
    value,
    placeholder,
    name,
    id,
    w30,
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
    disabled = false,
    prefix,
    step,
    min,
    max,
    control,
    minWithdrawal,
    maxWithdrawal,
    showSmallText = true
  } = props;
  const currency = useAppSelector((state: any) => state.Currency.currency);
  return withWrapper ? (
    <FieldWrapper
      className={classNameWrapper}
      formCheck={false}
      htmlFor={id}
      label={label}
      error={error}
    >
      <Controller
        control={control}
        name={name}
        value={value}
        render={({ field }) => (
          <CurrencyInput
            id={id}
            placeholder={placeholder}
            groupSeparator={"."}
            decimalSeparator={","}
            prefix={currency.symbol}
            step={currency.code === "PEN" ? 0.01 : 1}
            min={min}
            value={field.value}
            max={max}
            w-30={w30 ? "true" : null}
            w-50={w50 ? "true" : null}
            w-75={w75 ? "true" : null}
            w-100={w100 ? "true" : null}
            w-50-m={w50m ? "true" : null}
            w-75-m={w75m ? "true" : null}
            w-100-m={w100m ? "true" : null}
            style={style}
            onValueChange={(e) => {
              field.onChange(e);
            }}
          />
        )}
      />
      {showSmallText && (
        <p className="text-white mt-2">
          Mínimo{' '}
          <ShowNumberFormat
            value={currency.code === 'PEN' ? 25 : minWithdrawal}
          />
          <span style={{ marginLeft: '5%' }}>
            {' '}
            Máximo{' '}
            <ShowNumberFormat
              value={currency.code === 'PEN' ? 5000 : maxWithdrawal}
            />
          </span>
        </p>
      )}
    </FieldWrapper>
  ) : (
    <>
      <Controller
        control={control}
        name={name}
        value={value}
        render={({ field }) => (
          <CurrencyInput
            id={id}
            placeholder={placeholder}
            groupSeparator={"."}
            decimalSeparator={","}
            prefix={currency.symbol}
            step={currency.code === "PEN" ? 0.01 : 1}
            min={min}
            value={field.value}
            max={max}
            w-30={w30 ? "true" : null}
            w-50={w50 ? "true" : null}
            w-75={w75 ? "true" : null}
            w-100={w100 ? "true" : null}
            w-50-m={w50m ? "true" : null}
            w-75-m={w75m ? "true" : null}
            w-100-m={w100m ? "true" : null}
            style={style}
            onValueChange={(e) => {
              field.onChange(e);
            }}
          />
        )}
      />
      {showSmallText && (
        <p className="text-white mt-2">
          Mínimo{' '}
          <ShowNumberFormat
            value={currency.code === 'PEN' ? 25 : minWithdrawal}
          />
          <span style={{ marginLeft: '5%' }}>
            {' '}
            Máximo{' '}
            <ShowNumberFormat
              value={currency.code === 'PEN' ? 5000 : maxWithdrawal}
            />
          </span>
        </p>
      )}
      {error?.message && (
        <div role="alert" aria-label={error.message} className="error">
          {error.message}
        </div>
      )}
    </>
  );
};
export default memo(InputField);
