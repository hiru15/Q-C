import type { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";
import type { FieldWrapperPassThroughProps } from "./FieldWrapper";
import FieldWrapper from "./FieldWrapper";
import { Image } from "@components/Common/Image/index";
import { memo } from "react";
import dynamic from "next/dynamic";
import Button from "@components/Common/Button/Button";
const PasswordStrengthMeter = dynamic(
  () => import("@components/Common/PasswordStrenghtMeter")
);

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password";
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  placeholder: string;
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
  showConditionPassword: boolean;
  passwordToCheck?: string;
  SetValidPassword?(): any;
  onFocus?(): any;
  onChange?(e: any): any;
  white?: boolean;
  withRow?: boolean;
};

const InputPasswordField = (props: InputFieldProps) => {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const {
    type = "text",
    label,
    className,
    registration,
    error,
    defaultValue,
    placeholder,
    name,
    id,
    w50,
    w75,
    w100,
    showConditionPassword,
    passwordToCheck,
    SetValidPassword,
    onFocus,
    onChange,
    white,
    w50m,
    w75m,
    w100m,
    withRow = true,
  } = props;

  return (
    <>
      {withRow ? (
        <div className="row">
          <div className="col">
            <FieldWrapper htmlFor={id} label={label} error={error}>
              <input
                {...registration}
                {...className}
                type={visibilityPassword ? "text" : "password"}
                id={id}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onFocus={onFocus}
                onChange={onChange}
                w-50={w50 ? "true" : null}
                w-75={w75 ? "true" : null}
                w-100={w100 ? "true" : null}
                w-50-m={w50m ? "true" : null}
                w-75-m={w75m ? "true" : null}
                w-100-m={w100m ? "true" : null}
              />
            </FieldWrapper>
          </div>
          <div
            className="col-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            {white ? (
              <Image
                alt="eye.jpg"
                src={
                  visibilityPassword
                    ? "/assets/icons/eyeBlack.svg"
                    : "/assets/icons/eyeBlack2.svg"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setVisibilityPassword(!visibilityPassword);
                }}
                style={{
                  cursor: "pointer",
                }}
                aspectRatio="1:1"
                layout="intrinsic"
                width={30}
              />
            ) : (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setVisibilityPassword(!visibilityPassword);
                }}
                className="only-icon"
                style={{ background: "transparent", marginTop: "12px" }}
              >
                <Image
                  alt="eye.jpg"
                  src={
                    visibilityPassword
                      ? "/assets/icons/visibility-on.svg"
                      : "/assets/icons/visibility-off.svg"
                  }
                  aspectRatio="1:1"
                  layout="intrinsic"
                  width={30}
                />
              </Button>
            )}
          </div>
        </div>
      ) : (
        <>
          <FieldWrapper htmlFor={id} label={label} error={error}>
            <input
              {...registration}
              {...className}
              type={visibilityPassword ? "text" : "password"}
              id={id}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onFocus={onFocus}
              onChange={onChange}
              w-50={w50 ? "true" : null}
              w-75={w75 ? "true" : null}
              w-100={w100 ? "true" : null}
              w-50-m={w50m ? "true" : null}
              w-75-m={w75m ? "true" : null}
              w-100-m={w100m ? "true" : null}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                setVisibilityPassword(!visibilityPassword);
              }}
              className="only-icon"
              style={{ background: "transparent", marginTop: "12px" }}
            >
              <Image
                alt="eye.jpg"
                src={
                  visibilityPassword
                    ? "/assets/icons/visibility-on.svg"
                    : "/assets/icons/visibility-off.svg"
                }
                aspectRatio="1:1"
                layout="intrinsic"
                width={30}
              />
            </Button>
          </FieldWrapper>
        </>
      )}

      {(showConditionPassword ||
        (passwordToCheck !== "" && SetValidPassword !== undefined)) && (
        <div>
          <PasswordStrengthMeter
            showConditionPassword={showConditionPassword}
            SetValidPassword={SetValidPassword}
            password={passwordToCheck}
          />
        </div>
      )}
    </>
  );
};
export default memo(InputPasswordField);
