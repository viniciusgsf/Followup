/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback} from "react";
import { IconBaseProps} from "react-icons/lib";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest}) => {
    return (
    <Container>
        { Icon && <Icon size={20}/>}
        <input 
                name={name}
                {...rest}
            />
    </Container>
    );     
};

export default Input;