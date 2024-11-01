import {React, useRef} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


const emailRegex = /^[\w\._]+@[a-z]+\.[a-z]{2,}$/

const registrationFormScheme = yup.object().required().shape({
    email: yup.string().min(4).max(20).matches(emailRegex),
    password: yup.string().min(4).max(20).matches(),
    repeatePassword: yup.string().min(4).max(20).matches(),
})

export function FormComponent() {
const {register, handleSubmit} = useForm()

const onSubmit = (data) => {
    console.log(data);
}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='email' {...register('e-mail')} placeholder='E-mail'></input>
            <input type='password' {...register('password')} placeholder='Password'></input>
            <input type='password' {...register('repeatPassword')} placeholder='Repeat password'></input>
            <button type='submit'>Зарегистрироваться</button>
        </form>
    )
}