/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState,} from "react";
import { IconBaseProps} from "react-icons/lib";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: object;
    icon?: React.ComponentType<IconBaseProps>;
}

const ProfileInput: React.FC<InputProps> = ({ name, icon: Icon, containerStyle, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused ] = useState(false);
    const [isFilled, setIsFilled ] = useState(false);
    const {fieldName, defaultValue, error, registerField} = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)

        setIsFilled(!! inputRef.current?.value) 
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
 
    return (
    <Container style={containerStyle} isErrored={ !! error} isFocused={isFocused} isFilled={isFilled}>
        { Icon && <Icon size={20}/>}
        <input 
                name={name}
                defaultValue={defaultValue} 
                ref={inputRef} 
                {...rest}
            />
            {error && <Error title={error}>
                <FiAlertCircle color="#c53030" size={20} /> 
            </Error>}
    </Container>
    );     
};

export default ProfileInput;