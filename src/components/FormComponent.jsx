import { React } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputComponent } from "./FormInputComponent.jsx";

const emailRegex = /^[\w\._]+@[a-z]+\.[a-z]{2,}$/;

// Описываем схему проверки для формы:
const registrationFormScheme = yup
  .object()
  .required()
  .shape({
    email: yup
      .string()
      .min(4, "В email должно быть не менее 4х символов")
      .max(20, "В email должно быть не более 20 символов")
      .matches(
        emailRegex,
        "Форма записи example@example.domane. Допустимые символы: a-z A-Z 0-9 _"
      ),
    password: yup
      .string()
      .min(4, "В пароле должно быть не менее 4х символов")
      .max(20, "В пароле должно быть не более 20 символов"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], 'Не совпадает с полем "password"'),
  });

export function FormComponent() {
  // Получаем объект работы с полем, проверки формы, получения ошибок формы:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    // Говорим, что используем yup-схему
    resolver: yupResolver(registrationFormScheme),
  });

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputComponent
          register={register("email")}
          placeholder="E-mail"
          errorMessage={errors.email?.message}
        />
        <FormInputComponent
          register={register("password")}
          placeholder="Password"
          errorMessage={errors.password?.message}
        />
        <FormInputComponent
          register={register("repeatPassword")}
          placeholder="Repeat password"
          errorMessage={errors.repeatPassword?.message}
        />
        <input type="submit" />
      </form>
    </>
  );
}