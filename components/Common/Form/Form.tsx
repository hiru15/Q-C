import YupValidationResolver from "@utils/YupValidationResolver";
import * as React from "react";
import clsx from "clsx";
import { memo } from "react";
import type {
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import type { SchemaOf } from "yup";
type FormProps<TFormValues, Schema> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
  white: boolean;
  onClick?(): void;
};
const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends SchemaOf<unknown, unknown> = SchemaOf<unknown, unknown>
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
  white,
  onClick,
}: FormProps<TFormValues, Schema>) => {
  const resolver = YupValidationResolver(schema);
  const methods = useForm<TFormValues>({ ...options, resolver });
  return (
    <form
      white={white ? "true" : null}
      className={clsx("", className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
      onClick={onClick}
    >
      {children(methods)}
    </form>
  );
};
export default memo(Form);
