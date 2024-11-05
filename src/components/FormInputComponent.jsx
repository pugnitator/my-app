import { React } from "react";

export function FormInputComponent({ register, placeholder, errorMessage }) {
  return (
    <>
      <input {...register} placeholder={placeholder}></input>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}