import {React, useRef} from 'react';

export function InputComponent(props) {

    const {type, register, placeholder} = props


    return(
        <input type={type} {...register} placeholder={placeholder}/>
    )
}