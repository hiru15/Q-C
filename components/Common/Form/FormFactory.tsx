import { useState } from "react";
import dynamic from "next/dynamic";
import Form from '@components/Common/Form/Form';
import InputField from '@components/Common/Form/InputField';
import InputPasswordField from '@components/Common/Form/InputPassword';
import LinkElement from '@components/Common/Link/index';
import Button from '@components/Common/Button/Button';
import Title from '@components/Common/Title';
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Formato de email incorrecto"
    )
    .required("El campo es requerido"),
  password: yup.string().min(8).max(32).required("El campo es requerido"),
  terms: yup.boolean(),
  rememberMe: yup.boolean(),
});

type FormValues = {
  Email: string;
  correo: string;
};

const FormFactory = ({ config, titleForm, loadingForm }: any) => {
  const [formDetails, setFormDetails] = useState({
    Email: "ejooo",
    correo: "",
  });

  const OnChangeInput = (value: any, dataLabel: string) => {
    console.log("valor", value);
    console.log("dataLabel", dataLabel);
  };

  const getElement = ({ type, label, placeholder, name, href, textLink, textSpan, textTitle, typeTitle, className }: any, register: any) => {
    switch (type) {
      case "text":
        return (
          <InputField
          type={type}
          label={label}
          placeholder={placeholder}
          registration={register(name,{required: true})}
          defaultValue={formDetails[name]}
          htmlFor={name}
          id={name}
          name={name}
          w100={true}
          />
        );
        break;
      case "number":
        return null;
      case "password":
        return (
          <InputPasswordField
          type={type}
          label={label}
          placeholder={placeholder}
          registration={register(name,{required: true})}
          defaultValue={formDetails[name]}
          htmlFor={name}
          id={name}
          name={name}
          w75={true}
          />
        );
      case "date":
        return null;
      case 'Link':
        return (
          <LinkElement
          href={href}
          >
            {textLink}
          </LinkElement>
        )
      case 'Span':
        return (
          <span>{textSpan}{' '}</span>
        )
      case 'Button':
        return (
          <Button
          type="submit"
          pillPrimary={true}
          isDisabled={false}
          >
            {loadingForm ? (
              <span>
                Iniciando sesión{' '}
                <i className="fa fa-circle-o-notch fa-spin ml-2"></i>
              </span>
            ) : (
              <span>Iniciar sesión</span>
            )}
          </Button>
        )
      case 'Title':
        return (
          <Title
          textTitle={textTitle}
          typeTitle={typeTitle}
          className={className}
          />
        )
      default : null
    }
  };

  return (
    <Form<FormValues>
      onSubmit={async (values: any) => {
        console.log("values", values);
      }}
      className="formLogin"
      id={"FormLogin"}
      schema={validationSchema}
      white={true}
    >
      {({ register }) => (
        <>
        {config.map((element: any)=>{
          return getElement(element,register)
        })}
        </>
      )}
    </Form>
  );
};

export default FormFactory;
